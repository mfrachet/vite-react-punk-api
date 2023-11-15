import { ReactNode } from "react";
import { Container } from "../components/Container";
import { Layout } from "./Layout";
import styled from "styled-components";

export interface BeerDetailLayoutProps {
  children: ReactNode;
  goBackSlot: ReactNode;
  isLoading?: boolean;
}

const Nav = styled.nav`
  padding: ${(p) => p.theme.spacing[4]} 0;
`;

export const BeerDetailLayout = ({
  children,
  isLoading,
  goBackSlot,
}: BeerDetailLayoutProps) => {
  return (
    <Layout>
      <Container>
        <Nav aria-label="In page navigation">{goBackSlot}</Nav>
        <main aria-busy={Boolean(isLoading)}>{children}</main>
      </Container>
    </Layout>
  );
};
