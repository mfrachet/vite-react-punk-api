import { ReactNode } from "react";
import { ResetCss } from "../components/ResetCss";
import { ToggleTheme } from "../themes/components/ToggleTheme";
import { Container } from "../components/Container";
import { Box } from "../components/Box";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Container as="nav" aria-label="Main navigation">
        <Box $pt={2} $pb={2}>
          <ToggleTheme />
        </Box>
      </Container>
      {children}
      <ResetCss />
    </>
  );
};
