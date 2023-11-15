import { expect, describe, it, afterEach, afterAll, beforeAll } from "vitest";
import { axe } from "vitest-axe";
import { screen, waitFor } from "@testing-library/react";
import remoteBeers from "@/modules/beers/fixtures/remoteBeers.json";
import { render } from "@/modules/testing/render";
import { RandomBeer } from "../RandomBeer";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get("https://api.punkapi.com/v2/beers/random", () =>
    HttpResponse.json(remoteBeers)
  )
);

describe("RandomBeer", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("checks the loading state", () => {
    render(<RandomBeer />);

    expect(
      screen.getByTestId("beer-card-placeholder").getAttribute("aria-busy")
    ).toBe("true");
  });

  it("shows the random beer", async () => {
    const { container } = render(<RandomBeer />);

    // Wait for the loading state to finish
    await waitFor(() =>
      expect(screen.queryByTestId("beer-card-placeholder")).toBe(null)
    );

    expect(screen.getByRole("heading", { name: "Buzz" })).toBeDefined();

    expect(screen.getByText("09/2007")).toBeDefined();

    const link = screen.getByRole("link", {
      name: "View details of Buzz",
    });
    expect(link).toBeDefined();
    expect(link.getAttribute("href")).toBe("/beers/1");
    expect(await axe(container)).toHaveNoViolations();
  });
});
