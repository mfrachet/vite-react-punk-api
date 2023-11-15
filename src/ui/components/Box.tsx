import styled, { DefaultTheme } from "styled-components";

export interface BoxProps {
  $pt?: keyof DefaultTheme["spacing"];
  $pb?: keyof DefaultTheme["spacing"];
  $bg?: keyof DefaultTheme["colors"]["text"];
}

export const Box = styled.div<BoxProps>`
  padding-top: ${(p) => p.theme.spacing[p.$pt || 0]};
  padding-bottom: ${(p) => p.theme.spacing[p.$pb || 0]};
  min-height: 100%;
  background: ${(p) => (p.$bg ? p.theme.colors.text[p.$bg] : "initial")};
`;
