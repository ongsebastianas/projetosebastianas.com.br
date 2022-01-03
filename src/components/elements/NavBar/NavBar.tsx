import React from "react";

import StyledNavBar from "./StyledNavBar";
import { INavBarProps } from "./types";

const NavBar: React.FC<INavBarProps> = ({ children, ...props }) => {
  return (
    <StyledNavBar {...props}>
      <ul>
        { children }
      </ul>
    </StyledNavBar>
  )
}

export default NavBar;