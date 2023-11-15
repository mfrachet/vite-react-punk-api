import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid ${(p) => p.theme.colors.text[200]};
  border-radius: ${(p) => p.theme.radius.md};
  padding: ${(p) => p.theme.spacing[4]};
  width: 100%;
  height: 100%;

  &:hover {
    cursor: ${(p) => (p.onClick ? "pointer" : "initial")};
    background: ${(p) => (p.onClick ? p.theme.colors.text[100] : "initial")};
  }

  &:active {
    background: ${(p) => (p.onClick ? p.theme.colors.text[200] : "initial")};
  }
`;
