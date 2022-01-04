import styled from "styled-components";

import { ILinkProps } from "./types";

const StyledLink = styled.a<ILinkProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  transition: 0.2s !important;

  & .icon {
    margin-right: 0.5rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export default StyledLink;