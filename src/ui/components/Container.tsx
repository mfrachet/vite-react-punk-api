import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 0 ${(p) => p.theme.spacing[2]};
`;
