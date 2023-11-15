import { useQuery } from "react-query";
import { getBeers } from "../services/beers";

// Static for now to only target the goal of the exercise
const page = 1;

export const useBeers = () => {
  const query = useQuery(["beers", page], () => getBeers(page));

  return {
    isLoading: query.isLoading,
    error: query.error,
    beers: query.data || [],
  };
};
