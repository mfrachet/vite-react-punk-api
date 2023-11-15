import { BeerCardLayout } from "./BeerCardLayout";
import { Placeholder } from "@/ui/components/Placeholder";

export const BeerCardPlaceholder = () => {
  return (
    <BeerCardLayout
      aria-busy={true}
      imageSlot={<Placeholder height={100} width={50} />}
      titleSlot={<Placeholder height={50} width={100} />}
      ctaSlot={<Placeholder height={32} width={100} />}
      data-testid="beer-card-placeholder"
    >
      <Placeholder height={20} width={160} />
    </BeerCardLayout>
  );
};
