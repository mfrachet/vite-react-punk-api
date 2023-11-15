import { Beer } from "../../types";
import { Img } from "@/ui/components/Img";
import { BeerCardLayout } from "./BeerCardLayout";
import { Typography } from "@/ui/components/Typography";
import { Button } from "@/ui/components/Button";
import { useRef } from "react";
import { Link } from "react-router-dom";

export interface BeerCardProps {
  beer: Beer;
}

export const BeerCard = ({ beer }: BeerCardProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <BeerCardLayout
      imageSlot={
        <Img
          src={beer.img}
          alt={beer.name}
          height={100}
          placeholderWidth={50}
        />
      }
      titleSlot={
        <Typography as="h2" $fs="lg">
          {beer.name}
        </Typography>
      }
      ctaSlot={
        <Button
          as={Link}
          to={`/beers/${beer.id}`}
          ref={linkRef}
          $variant="secondary"
        >
          View details<span className="sr-only"> of {beer.name}</span>
        </Button>
      }
      onClick={() => linkRef?.current?.click()}
    >
      <Typography as="time" dateTime={beer.firstBrewed}>
        {beer.firstBrewed}
      </Typography>
    </BeerCardLayout>
  );
};
