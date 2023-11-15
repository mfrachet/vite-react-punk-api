import { BeerCard } from "./BeerCard/BeerCard";
import { BeerCardPlaceholder } from "./BeerCard/BeerCardPlaceholder";
import { useRandomBeer } from "../hooks/useRandomBeer";

export const RandomBeer = () => {
  const { beer, isLoading } = useRandomBeer();

  if (isLoading) {
    return <BeerCardPlaceholder />;
  }

  if (!beer) {
    return null;
  }

  return <BeerCard beer={beer} />;
};
