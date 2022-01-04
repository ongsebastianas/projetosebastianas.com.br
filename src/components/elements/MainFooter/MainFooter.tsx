import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

import StyledMainFooter from "./StyledMainFooter";
import { Button, Link, Logo, NavBar, NavBarItem, Section } from "..";

const FooterSection = styled(Section)`
  flex: 1;
  margin-bottom: 2rem;
`;

const FooterLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  margin-top: 0.5rem;
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
        <FooterLink href="https://api.whatsapp.com/send?phone=5547900000000" icon={<FaWhatsapp />}>
          +55 47 90000-0000
        </FooterLink>
      </FooterSection>

      <FooterSection>
        <div>
          <FooterSection>
            <Button>Tornar-se membro</Button>
          </FooterSection>

          <FooterSection title="Siga nas redes sociais:">

          </FooterSection>
        </div>
      </FooterSection> 
    </StyledMainFooter>
  )
}

export default MainFooter;