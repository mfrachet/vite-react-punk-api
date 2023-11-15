import { useQuery } from "react-query";
import { getRandomBeer } from "../services/beers";
import { useId } from "react";

export const useRandomBeer = () => {
  const id = useId();
  const query = useQuery(["random-beer", id], getRandomBeer, {
    refetchInterval: 10000,
  });

  return {
    isLoading: query.isLoading,
    error: query.error,
    beer: query.data,
  };
};
