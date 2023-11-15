import { expect, describe, it, afterEach, afterAll, beforeAll } from "vitest";
import { axe } from "vitest-axe";
import { screen } from "@testing-library/react";
import remoteBeers from "@/modules/beers/fixtures/remoteBeers.json";
import { render } from "@/modules/testing/render";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import Homepage from "../Homepage";

const server = setupServer(
  http.get("https://api.punkapi.com/v2/beers", () =>
    HttpResponse.json(remoteBeers)
  ),
  http.get("https://api.punkapi.com/v2/beers/random", () =>
    HttpResponse.json(remoteBeers)
  )
);

describe("Homepage", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("checks the default layout of the page", async () => {
    const { container } = render(<Homepage />);

    expect(screen.getByRole("heading", { name: "The beers" })).toBeDefined();

    expect(
      screen.getByRole("region", { name: "Discover our new beers" })
    ).toBeDefined();

    expect(screen.getByTestId("random-beer-section")).toBeDefined();

    expect(
      screen.getByRole("region", { name: "Our selection for you" })
    ).toBeDefined();

    expect(screen.getByTestId("beer-list-section")).toBeDefined();
    expect(await axe(container)).toHaveNoViolations();
  });
});
