import { List, ListItem } from "@/ui/components/List";
import { Beer } from "../types";
import { Searchbar } from "@/ui/components/Searchbar";
import { useSearchParams } from "react-router-dom";
import { Flex } from "@/ui/components/Flex";
import { Typography } from "@/ui/components/Typography";
import { useEffect, useRef } from "react";
import { notifyAt } from "@/modules/a11y/hooks/notifyAt";
import { Link } from "@/ui/components/Link";
import { useBeers } from "../hooks/useBeers";
import { Box } from "@/ui/components/Box";

export interface BeerListItemProps {
  beer: Beer;
  animationIndex: number;
}

const BeerListItem = ({ beer, animationIndex }: BeerListItemProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <ListItem
      onClick={() => linkRef.current?.click()}
      $animationIndex={animationIndex}
    >
      <Link to={`/beers/${beer.id}`} ref={linkRef}>
        {beer.name}
      </Link>
    </ListItem>
  );
};

export const BeerList = () => {
  const [searchParams] = useSearchParams();
  const beerQuery = searchParams.get("beer");
  const { beers, isLoading } = useBeers();

  const filteredBeers = beerQuery
    ? beers.filter((beer) =>
        beer.name.toLowerCase().includes(beerQuery.toLowerCase())
      )
    : beers;

  useEffect(() => {
    if (beerQuery === null) return;
    notifyAt(`${filteredBeers.length} found for the research`);
  }, [beerQuery, filteredBeers.length]);

  return (
    <Box
      as="section"
      aria-labelledby="our-selection"
      $pb={8}
      aria-busy={isLoading}
      data-testid="beer-list-section"
    >
      <Typography id="our-selection" as="h2" $fs="xl" $weight="bold">
        Our selection for you
      </Typography>

      <Flex $gap={2}>
        <Searchbar
          label={"Beer name"}
          placeholder={"e.g: Fake Lager"}
          submitLabel={"Search"}
          clearLabel={"Clear"}
        />

        <Typography $fs="sm">Result count: {filteredBeers.length}</Typography>

        <List>
          {filteredBeers.map((beer, index) => (
            <BeerListItem key={beer.id} beer={beer} animationIndex={index} />
          ))}
        </List>
      </Flex>
    </Box>
  );
};
