import { expect, describe, it, afterAll, afterEach, beforeAll } from "vitest";
import remoteBeers from "@/modules/beers/fixtures/remoteBeers.json";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { Beer } from "../../types";
import { getBeerById, getBeers, getRandomBeer } from "../beers";

describe("beers", () => {
  describe("getBeers", () => {
    const server = setupServer(
      http.get("https://api.punkapi.com/v2/beers", () =>
        HttpResponse.json(remoteBeers)
      )
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("get the remote data and map them to the locale types", async () => {
      const expected: Beer = {
        description:
          "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        firstBrewed: "09/2007",
        id: 1,
        img: "https://images.punkapi.com/v2/keg.png",
        name: "Buzz",
        tagline: "A Real Bitter Experience.",
      };

      const allBeers = await getBeers(15);

      // Not a huge fan of snapshotting so, asserting on the first item
      // without checking edge cases since I don't really know what could go wrong at the API level
      expect(allBeers[0]).toEqual(expected);
    });
  });

  describe("getBeerById", () => {
    const server = setupServer(
      http.get("https://api.punkapi.com/v2/beers/1", () =>
        HttpResponse.json(remoteBeers)
      )
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("get the remote data and map them to the locale types", async () => {
      const expected: Beer = {
        description:
          "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        firstBrewed: "09/2007",
        id: 1,
        img: "https://images.punkapi.com/v2/keg.png",
        name: "Buzz",
        tagline: "A Real Bitter Experience.",
      };

      const beer = await getBeerById("1");

      expect(beer).toEqual(expected);
    });
  });

  describe("getRandomBeer", () => {
    const server = setupServer(
      http.get("https://api.punkapi.com/v2/beers/random", () =>
        HttpResponse.json(remoteBeers)
      )
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("get the remote data and map them to the locale types", async () => {
      const expected: Beer = {
        description:
          "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        firstBrewed: "09/2007",
        id: 1,
        img: "https://images.punkapi.com/v2/keg.png",
        name: "Buzz",
        tagline: "A Real Bitter Experience.",
      };

      const beer = await getRandomBeer();

      expect(beer).toEqual(expected);
    });
  });
});
