import React from "react";
import { FaLock } from "react-icons/fa";

import { Logo, NavBar, NavBarItem, UppercasedButton } from "..";
import StyledMainHeader from "./StyledMainHeader";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
        <Logo logoColor="original" />

        <NavBar inline>
          <NavBarItem>Quem somos</NavBarItem>
          <NavBarItem>Blog</NavBarItem>
          <NavBarItem>Parceiros</NavBarItem>
          <NavBarItem>Depoimentos</NavBarItem>
        </NavBar>
        
        <UppercasedButton 
          icon={<FaLock />} 
          variant="transparent"
        >
            Área de Membros
        </UppercasedButton>
    </StyledMainHeader>
  )
}

export default MainHeader;