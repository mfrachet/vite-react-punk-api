import { ReactNode } from "react";
import { Container } from "../components/Container";
import { Layout } from "./Layout";
import { Typography } from "../components/Typography";
import { Flex } from "../components/Flex";

export interface ErrorLayoutProps {
  children: ReactNode;
  ctaSlot: ReactNode;
}

export const ErrorLayout = ({ children, ctaSlot }: ErrorLayoutProps) => {
  return (
    <Layout>
      <Container as="main">
        <Typography as="h1" $fs="xl" $weight="bold">
          Woops! Something went wrong
        </Typography>
        <Flex $gap={8}>
          {children}
          <div>{ctaSlot}</div>
        </Flex>
      </Container>
    </Layout>
  );
};
