import { ReactNode } from "react";
import { Container } from "../components/Container";
import { Layout } from "./Layout";
import { Flex } from "../components/Flex";

export interface HomepageLayoutProps {
  children: ReactNode;
  titleSlot: ReactNode;
}

export const HomepageLayout = ({
  children,
  titleSlot,
}: HomepageLayoutProps) => {
  return (
    <Layout>
      <Container as="main">
        {titleSlot}

        <Flex $gap={8}>{children}</Flex>
      </Container>
    </Layout>
  );
};
