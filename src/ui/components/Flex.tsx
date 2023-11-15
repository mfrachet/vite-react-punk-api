import styled, { DefaultTheme } from "styled-components";

type FlexOrientation = "row" | "column";

export interface FlexProps {
  $orientation?: {
    initial?: FlexOrientation;
    md?: FlexOrientation;
  };
  $gap?: keyof DefaultTheme["spacing"];
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(p) => p.$orientation?.initial || "column"};
  gap: ${(p) => p.theme.spacing[p.$gap || 0]};
  height: 100%;
  width: 100%;

  ${(p) =>
    p.$orientation?.md
      ? `
        @media (min-width: ${p.theme.breakpoints.md}px) {
          flex-direction: ${p.$orientation.md};
        }`
      : ``}
`;
