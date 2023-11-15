import { notifyAt } from "@/modules/a11y/hooks/notifyAt";
import { BeerCardPlaceholder } from "@/modules/beers/components/BeerCard/BeerCardPlaceholder";
import { useBeerById } from "@/modules/beers/hooks/useBeerById";
import { Img } from "@/ui/components/Img";
import { Link } from "@/ui/components/Link";
import { Typography } from "@/ui/components/Typography";
import { BeerDetailLayout } from "@/ui/layouts/BeerDetailLayout";
import { ErrorLayout } from "@/ui/layouts/ErrorLayout";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BeerDetail = () => {
  const { id } = useParams();
  const { beer, isLoading, error } = useBeerById(id!);

  useEffect(() => {
    if (!isLoading) return;
    notifyAt("The page has finished loading the beer. Check it out!");
  }, [isLoading]);

  const goBackSlot = <Link to="/">Go back</Link>;

  if (isLoading) {
    return (
      <BeerDetailLayout isLoading goBackSlot={goBackSlot}>
        <h1 className="sr-only">Retrieving the beer...</h1>
        <BeerCardPlaceholder />
      </BeerDetailLayout>
    );
  }

  if (error) {
    return (
      <ErrorLayout ctaSlot={goBackSlot}>
        <Typography>
          The beer that you are attempting to get does not exist.
        </Typography>
      </ErrorLayout>
    );
  }

  return (
    <BeerDetailLayout goBackSlot={goBackSlot}>
      {beer && (
        <>
          <Img src={beer.img} height={100} placeholderWidth={50} />
          <Typography as="h1" $fs="xl" $weight="bold" $color={900}>
            {beer.name}
          </Typography>
          <Typography>{beer.description}</Typography>
        </>
      )}
    </BeerDetailLayout>
  );
};

export default BeerDetail;
