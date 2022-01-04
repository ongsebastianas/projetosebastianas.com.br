import React from "react";
import styled from "styled-components";

import StyledMainFooter from "./StyledMainFooter";
import { Button, Logo, NavBar, NavBarItem, Section } from "..";

const FooterSection = styled(Section)`
  flex: 1;
  margin-bottom: 2rem;
`;

const FooterNavBarItem = styled(NavBarItem)`
  color: ${props => props.theme.colors["verde-claro"]};
  opacity: 0.9;
  font-weight: 500;
  margin-bottom: .75rem;
`;

const MainFooter = () => {
  return (
    <StyledMainFooter>
      <FooterSection>
        <Logo logoColor="white" />
      </FooterSection>

      <FooterSection>
        <NavBar>
          <FooterNavBarItem>Página Inicial</FooterNavBarItem>
          <FooterNavBarItem>Blog</FooterNavBarItem>
          <FooterNavBarItem>Termos e privacidade</FooterNavBarItem>
        </NavBar>
      </FooterSection>

      <FooterSection title="Canal de atendimento">

      </FooterSection>

      <FooterSection>
        <div>
          <FooterSection>
            <Button fullWidth>Tornar-se membro</Button>
          </FooterSection>

          <FooterSection title="Siga nas redes sociais">

          </FooterSection>
        </div>
      </FooterSection> 
    </StyledMainFooter>
  )
}

export default MainFooter;