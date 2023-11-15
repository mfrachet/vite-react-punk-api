import { Card } from "@/ui/components/Card";
import { Flex } from "@/ui/components/Flex";
import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

export interface BeerCardLayoutProps extends HTMLAttributes<HTMLElement> {
  imageSlot: ReactNode;
  titleSlot: ReactNode;
  children: ReactNode;
  ctaSlot?: ReactNode;
  onClick?: () => void;
}

const BeerCardLayoutWrapper = styled.div`
  height: 200px;
`;

const BeerCardImage = styled.div`
  text-align: center;
  width: 50px;
  flex-shrink: 0;
`;

const CtaWrapper = styled.div`
  margin-top: auto;
`;

export const BeerCardLayout = ({
  imageSlot,
  titleSlot,
  children,
  ctaSlot,
  onClick,
  ...props
}: BeerCardLayoutProps) => {
  return (
    <Card onClick={onClick}>
      <BeerCardLayoutWrapper {...props}>
        <Flex>
          <Flex $orientation={{ initial: "row" }} $gap={4}>
            <BeerCardImage>{imageSlot}</BeerCardImage>

            <Flex $gap={1}>
              {titleSlot}
              {children}
            </Flex>
          </Flex>
          {ctaSlot && <CtaWrapper>{ctaSlot}</CtaWrapper>}
        </Flex>
      </BeerCardLayoutWrapper>
    </Card>
  );
};
