import { chakra } from "@chakra-ui/react";
import styled from "styled-components";
import { device } from "theme/breakpoints";

// const Section = chakra("section", {
//   baseStyle: {
//     p: ["1rem 2rem", "1rem 5rem"],
//     position: "relative",
//     display: "flex"
//   }
// });

type SectionProps = {
  hasRepeatingBackground?: boolean;
};

const Section = styled.section<SectionProps>`
  padding: 3rem 2rem;
  position: relative;
  display: flex;
  flex-direction: row;

  ${props => props.hasRepeatingBackground && `
    background-image: url("/assets/images/repeatingBackground.svg");
    background-color: #BF3604;
  `}

  @media ${device.tablet} {
    padding: 3rem 5rem;
  }
`;

export default Section;

