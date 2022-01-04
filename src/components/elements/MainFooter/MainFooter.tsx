import { graphql, useStaticQuery } from "gatsby";
import React, { useCallback, useMemo } from "react";
import { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import * as Icons from "react-icons/fa";

import { Button, Icon, Logo, NavBar } from "..";
import { FooterCopyrightNotice, FooterIconAnchor, FooterLink, FooterNavBarItem, FooterSection, StyledMainFooter } from "./MainFooter.styled";

const MainFooter = () => {
  const { allContentfulRedesSocial: { nodes: socialNetworksList } } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulRedesSocial {
        nodes {
          nomeRedeSocial
          link
          icone
        }
      }
    }
  `);

  useEffect(() => {
    console.log(socialNetworksList);
  }, [socialNetworksList])

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <StyledMainFooter>
      <FooterSection isRow>
        <FooterSection style={{ padding: "" }}>
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
          <FooterLink href="https://api.whatsapp.com/send?phone=5547900000000" icon={<IoLogoWhatsapp />}>
            +55 47 90000-0000
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <div>
            <FooterSection>
              <Button>Tornar-se membro</Button>
            </FooterSection>

            <FooterSection title="Siga nas redes sociais:">
              <div style={{ marginTop: "0.5rem" }}>
                {
                  socialNetworksList.map(socialNetwork => (
                    <FooterIconAnchor title={socialNetwork.nomeRedeSocial} href={socialNetwork.link}>
                      <Icon 
                        icon={socialNetwork.icone}
                        color="white" 
                      />
                    </FooterIconAnchor>
                  ))
                }
              </div>
            </FooterSection>
          </div>
        </FooterSection>
      </FooterSection>

      <FooterSection noMargin centerContent>
        <FooterCopyrightNotice>{getCurrentYear()}. Todos os direitos reservados.</FooterCopyrightNotice>
      </FooterSection>
    </StyledMainFooter>
  )
}

export default MainFooter;