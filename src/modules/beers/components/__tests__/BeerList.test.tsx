import {
  expect,
  describe,
  it,
  vi,
  afterEach,
  afterAll,
  beforeAll,
} from "vitest";
import { axe } from "vitest-axe";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import remoteBeers from "@/modules/beers/fixtures/remoteBeers.json";
import { render } from "@/modules/testing/render";
import { BeerList } from "../BeerList";
import { notifyAt } from "@/modules/a11y/hooks/notifyAt";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

vi.mock("@/modules/a11y/hooks/notifyAt");

const server = setupServer(
  http.get("https://api.punkapi.com/v2/beers", () =>
    HttpResponse.json(remoteBeers)
  )
);

describe("BeerList", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("shows the layout of the BeerList", async () => {
    const { container } = render(<BeerList />);

    expect(
      screen.getByRole("region", { name: "Our selection for you" })
    ).toBeDefined();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shows a loading state", () => {
    render(<BeerList />);

    expect(
      screen
        .getByRole("region", { name: "Our selection for you" })
        .getAttribute("aria-busy")
    ).toBe("true");
  });

  it("shows a list of beers", async () => {
    const beerCount = 15;

    render(<BeerList />);

    // Wait for the loading state to resolve
    await waitFor(() =>
      expect(
        screen
          .getByRole("region", { name: "Our selection for you" })
          .getAttribute("aria-busy")
      ).toBe("false")
    );

    // Checking the number of items in the list
    // should correspond to the 15 items we mocked
    expect(screen.getByRole("list").childNodes.length).toBe(beerCount);
    expect(screen.getAllByRole("listitem").length).toBe(beerCount);

    // All of the items should have a link href-ing to the good page
    const allLinks = screen.getAllByRole("link");
    for (let i = 0; i < beerCount; i++) {
      expect(allLinks[i].getAttribute("href")).toBe(`/beers/${i + 1}`);
    }

    // Randomly checking in the list to at least see some names
    expect(
      screen.getByRole("link", { name: "Avery Brown Dredge" })
    ).toBeDefined();
    expect(screen.getByRole("link", { name: "AB:07" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Mixtape 8" })).toBeDefined();
  });

  it("searches in the list", async () => {
    const beerCountAfterSearch = 2;
    const searchCriteria = "ab";

    render(<BeerList />);

    // Wait for the loading state to resolve
    await waitFor(() =>
      expect(
        screen
          .getByRole("region", { name: "Our selection for you" })
          .getAttribute("aria-busy")
      ).toBe("false")
    );

    fireEvent.input(screen.getByRole("searchbox"), {
      target: { value: searchCriteria },
    });

    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    expect(screen.getByRole("list").childNodes.length).toBe(
      beerCountAfterSearch
    );

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(beerCountAfterSearch);

    for (let i = 0; i < beerCountAfterSearch; i++) {
      expect(listItems[i].textContent).toMatch(new RegExp(searchCriteria, "i"));
    }

    expect(vi.mocked(notifyAt)).toHaveBeenCalledWith(
      "2 found for the research"
    );
  });
});
