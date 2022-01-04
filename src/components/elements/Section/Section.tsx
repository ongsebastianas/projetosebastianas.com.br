import React, { HTMLProps } from "react";
import styled from "styled-components";

interface ISectionProps extends HTMLProps<HTMLElement> {
  title?: string;
}

const SectionTitle = styled.h6`
  color: ${props => props.theme.colors["verde-claro"]};
  opacity: 1;
  text-transform: uppercase;
`;

const Section: React.FC<ISectionProps> = ({ children, title, ...props }) => {
  return (
    <section {...props}>
      <SectionTitle>{ title }</SectionTitle>

      { children }
    </section>
  )
} 

export default Section;