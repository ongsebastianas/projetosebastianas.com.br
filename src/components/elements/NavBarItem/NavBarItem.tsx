import React, { HTMLProps } from "react";
import StyledNavBarItem from "./StyledNavBarItem";

const NavBarItem: React.FC<HTMLProps<HTMLElement>> = ({ children, className }) => {
  return (
    <StyledNavBarItem className={className}>
      { children }
    </StyledNavBarItem>
  )
}

export default NavBarItem;