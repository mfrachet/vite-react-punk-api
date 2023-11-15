import {
  expect,
  describe,
  it,
  afterEach,
  afterAll,
  beforeAll,
  vi,
} from "vitest";
import { axe } from "vitest-axe";
import { screen, waitFor } from "@testing-library/react";
import remoteBeers from "@/modules/beers/fixtures/remoteBeers.json";
import { render } from "@/modules/testing/render";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { notifyAt } from "@/modules/a11y/hooks/notifyAt";
import BeerDetail from "../BeerDetail";

vi.mock("@/modules/a11y/hooks/notifyAt");

const server = setupServer(
  http.get("https://api.punkapi.com/v2/beers/2", () =>
    HttpResponse.json(remoteBeers)
  ),
  http.get(
    "https://api.punkapi.com/v2/beers/12345",
    () =>
      new HttpResponse(null, {
        status: 404,
        statusText: "Out Of Apples",
      })
  )
);

describe("BeerDetail", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("checks the loading state", async () => {
    const { container } = render(<BeerDetail />, {
      initialRoute: `/beers/2`,
      routePath: "/beers/:id",
    });

    expect(
      screen.getByRole("heading", { name: "Retrieving the beer..." })
    ).toBeDefined();
    expect(screen.getByRole("main").getAttribute("aria-busy")).toBe("true");
    expect(screen.getAllByTestId("beer-card-placeholder").length).toBe(1);
    expect(vi.mocked(notifyAt)).toHaveBeenCalledWith(
      "The page has finished loading the beer. Check it out!"
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shows the error layout when the beer does not exist", async () => {
    const notExistingBeerId = "12345";

    render(<BeerDetail />, {
      initialRoute: `/beers/${notExistingBeerId}`,
      routePath: "/beers/:id",
    });

    // Wait for the content to be loaded before making assertions
    await waitFor(() =>
      expect(screen.getByRole("main").getAttribute("aria-busy")).toBe(null)
    );

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: "Woops! Something went wrong" })
      ).toBeDefined()
    );

    expect(
      screen.getByText(
        "The beer that you are attempting to get does not exist."
      )
    ).toBeDefined();
  });

  it("checks the default layout of the page when the data has resolved", async () => {
    render(<BeerDetail />, {
      initialRoute: `/beers/2`,
      routePath: "/beers/:id",
    });

    // Wait for the content to be loaded before making assertions
    await waitFor(() =>
      expect(screen.getByRole("main").getAttribute("aria-busy")).toBe("false")
    );

    expect(screen.getByRole("heading", { name: "Buzz" })).toBeDefined();

    expect(
      screen.getByText(
        "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
      )
    ).toBeDefined();

    expect(
      screen.getByRole("link", { name: "Go back" }).getAttribute("href")
    ).toBe("/");
  });
});
