import { Flex } from "@/ui/components/Flex";
import { RandomBeer } from "./RandomBeer";
import { Box } from "@/ui/components/Box";
import { Typography } from "@/ui/components/Typography";

export const RandomBeerSection = () => {
  return (
    <Box as="section" aria-labelledby="discover-beers" $pt={8} $pb={8}>
      <Typography id="discover-beers" as="h2" $fs="xl" $weight="bold">
        Discover our new beers
      </Typography>

      <Flex
        $orientation={{ initial: "column", md: "row" }}
        $gap={4}
        data-testid="random-beer-section"
      >
        <RandomBeer />
        <RandomBeer />
      </Flex>
    </Box>
  );
};
