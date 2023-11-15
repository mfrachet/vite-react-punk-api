import { useQuery } from "react-query";
import { getBeerById } from "../services/beers";

export const useBeerById = (beerId: string) => {
  const query = useQuery(["beer", beerId], () => getBeerById(beerId));

  return {
    isLoading: query.isLoading,
    error: query.error,
    beer: query.data,
  };
};
