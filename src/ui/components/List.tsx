import styled, { css, keyframes } from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing[1]};
`;

export interface ListItemProps {
  $animationIndex?: number;
}

const fadeEnterSliding = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(12px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const animation = (props: ListItemProps) => {
  if (props.$animationIndex === undefined) return "";

  return css`
    @media (prefers-reduced-motion: no-preference) {
      animation: ${fadeEnterSliding} 0.3s forwards;
      animation-delay: ${props.$animationIndex * 100}ms;
      opacity: 0;
    }
  `;
};

export const ListItem = styled.li<ListItemProps>`
  padding: ${(p) => p.theme.spacing[4]} ${(p) => p.theme.spacing[4]};
  border-radius: ${(p) => p.theme.radius.sm};
  background: ${(p) => p.theme.colors.text[100]};

  &:hover {
    cursor: ${(p) => (p.onClick ? "pointer" : "initial")};
    background: ${(p) => (p.onClick ? p.theme.colors.text[200] : "initial")};
  }

  &:active {
    background: ${(p) => (p.onClick ? p.theme.colors.text[300] : "initial")};
  }

  ${animation}
`;
