import styled, { keyframes } from "styled-components";

export interface PlaceholderProps {
  width: number;
  height: number;
}

const blink = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`;

export const Placeholder = styled.div<PlaceholderProps>`
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  background: ${(p) => p.theme.colors.text[200]};
  border-radius: ${(p) => p.theme.radius.md};
  animation: ${blink} 0.5s linear infinite alternate;
`;
