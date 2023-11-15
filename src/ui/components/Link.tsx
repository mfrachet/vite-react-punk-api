import { Ref, forwardRef } from "react";
import { LinkProps, Link as RLink } from "react-router-dom";
import styled from "styled-components";

const RawLink = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.text[700]};
  font-family: ${(p) => p.theme.fontFamily};
`;

export const Link = forwardRef(
  (props: LinkProps, ref: Ref<HTMLAnchorElement>) => {
    return <RawLink as={RLink} ref={ref} {...props} />;
  }
);

Link.displayName = "Link";
