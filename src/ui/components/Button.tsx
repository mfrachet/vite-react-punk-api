import styled from "styled-components";

export interface ButtonProps {
  $variant?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  font-family: ${(p) => p.theme.fontFamily};
  padding: ${(p) => p.theme.spacing[2]};
  border-radius: ${(p) => p.theme.radius.sm};

  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  ${(p) =>
    p.$variant === "secondary"
      ? `
        border: 1px solid ${p.theme.colors.secondary};
        color: ${p.theme.colors.secondary};
        background: transparent;
      `
      : `
        border: none;
        background: ${p.theme.colors.main};
        color: ${p.theme.colors.text[50]};
      `}
`;
