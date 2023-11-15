import { HTMLAttributes } from "react";
import styled, { DefaultTheme } from "styled-components";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  $fs?: keyof DefaultTheme["fs"];
  $weight?: keyof DefaultTheme["weight"];
  $color?: keyof DefaultTheme["colors"]["text"];
}

// Computing colors could be smarter, for sure *_*'
export const Typography = styled.p<TypographyProps>`
  color: ${(p) => p.theme.colors.text[p.$color || 700]};
  line-height: 1.6;
  font-size: ${(p) => p.theme.fs[p.$fs || "md"]};
  font-weight: ${(p) => (p.$weight ? p.theme.weight[p.$weight] : "initial")};
  font-family: ${(p) => p.theme.fontFamily};
`;
