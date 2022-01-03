import React from "react";
import StyledNavBarItem from "./StyledNavBarItem";

const NavBarItem: React.FC = ({ children }) => {
  return (
    <StyledNavBarItem>
      { children }
    </StyledNavBarItem>
  )
}

export default NavBarItem;