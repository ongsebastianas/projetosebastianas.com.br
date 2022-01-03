import React from "react";
import { Logo, NavBar, NavBarItem, UppercasedButton } from "..";
import StyledMainHeader from "./StyledMainHeader";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
        <Logo logoMode="original" />

        <NavBar inline>
          <NavBarItem>Quem somos</NavBarItem>
          <NavBarItem>Blog</NavBarItem>
          <NavBarItem>Parceiros</NavBarItem>
          <NavBarItem>Depoimentos</NavBarItem>
        </NavBar>
        
        <UppercasedButton variant="transparent">Área de Membros</UppercasedButton>
    </StyledMainHeader>
  )
}

export default MainHeader;