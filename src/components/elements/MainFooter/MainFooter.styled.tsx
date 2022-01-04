import styled from "styled-components";

import { NavBarItem, Section, Link } from "..";

type FooterSectionProps = { 
  isRow?: boolean,
  noMargin?: boolean,
  centerContent?: boolean
};

const FooterSection = styled(Section)<FooterSectionProps>`
  flex: 1;

  display: flex;
  justify-content: ${props => props.centerContent ? "center" : "flex-start"};
  align-items: ${props => props.centerContent ? "center" : "flex-start"};
  flex-direction: ${props => props.isRow ? "row" : "column"};
  margin-bottom: ${props => props.noMargin ? "0" : "2rem"};

  & > .logo-container {
    width: 70%;
  }
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

const FooterIconAnchor = styled.a`
  color: white;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
`;

const FooterCopyrightNotice = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${props => props.theme.colors["verde-claro"]};
  opacity: 0.9;
`;

const StyledMainFooter = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100vw;
  height: auto;

  background-color: ${props => props.theme.colors["verde-escuro"]};
`;

export {
  FooterLink,
  FooterNavBarItem,
  FooterSection,
  FooterIconAnchor,
  FooterCopyrightNotice,
  StyledMainFooter
};