import { API_ROOT } from "@/modules/constants";
import { Beer } from "../types";

const BEERS_PER_PAGE = 15;

// There's no easy way to generate types from the remote endpoint
// putting as any is the fastest way, yet not the safest, way to achieve what I want
// which is converting from a not managed type to a one we have control over.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapRemoteToLocalBeer = (remoteBeer: any): Beer => {
  return {
    id: remoteBeer.id,
    name: remoteBeer.name,
    tagline: remoteBeer.tagline,
    firstBrewed: remoteBeer.first_brewed,
    description: remoteBeer.description,
    img: remoteBeer.image_url,
  };
};

export const getBeers = async (page: number) => {
  const endpoint = `${API_ROOT}/beers?page=${page}&per_page=${BEERS_PER_PAGE}`;
  const response = await fetch(endpoint);
  const json = await response.json();
  const beers: Array<Beer> = json.map(mapRemoteToLocalBeer);

  return beers;
};

export const getBeerById = async (id: string) => {
  const endpoint = `${API_ROOT}/beers/${id}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Entity not found");
  }

  const json = await response.json();
  const beers: Array<Beer> = json.map(mapRemoteToLocalBeer);

  return beers[0];
};

export const getRandomBeer = async () => {
  const endpoint = `${API_ROOT}/beers/random`;
  const response = await fetch(endpoint);
  const json = await response.json();
  const beers: Array<Beer> = json.map(mapRemoteToLocalBeer);

  return beers[0];
};
