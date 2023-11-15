import { BeerList } from "@/modules/beers/components/BeerList";
import { RandomBeerSection } from "@/modules/beers/components/RandomBeerSection";
import { Typography } from "@/ui/components/Typography";
import { HomepageLayout } from "@/ui/layouts/HomepageLayout";

const Homepage = () => {
  return (
    <HomepageLayout
      titleSlot={
        <Typography as="h1" $fs="xxl" $weight="bold" $color={900}>
          The beers
        </Typography>
      }
    >
      <RandomBeerSection />
      <BeerList />
    </HomepageLayout>
  );
};

export default Homepage;
