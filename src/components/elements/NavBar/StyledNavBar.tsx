import styled, { css } from "styled-components";
import { INavBarProps } from "./types";

const getInlineNavBarStyle = () => css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
`;

const StyledNavBar = styled.nav<INavBarProps>`
  flex: 1;
  
  & > ul { 
    list-style: none; 
    ${props => props.inline && getInlineNavBarStyle()}
  }
`;

export default StyledNavBar;