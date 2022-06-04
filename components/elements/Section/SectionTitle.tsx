import { device } from "theme/breakpoints";
// import { chakra } from "@chakra-ui/react";
import styled, { css } from "styled-components";

// const SectionTitle = chakra("h2", {
//   baseStyle: {
//     fontWeight: "500",
//     fontFamily: "'Alegreya', sans-serif",
//     fontSize: { base: "2.5rem", lg: "3rem" },
//     lineHeight: 1,
//     color: "black"
//   }
// });

type SectionTitleVariant = "contained" | "ghost";

type SectionTitleProps = {
  sansSerif?: boolean;
  variant?: SectionTitleVariant
}

const SectionTitle = styled.h2<SectionTitleProps>`
  position: relative;
  font-weight: 300;
  font-family: ${props => props.sansSerif ? "'Alegreya Sans', sans-serif" : "'Alegreya', sans-serif"};
  line-height: 100%;
  font-size: 2.5rem;
  color: black;

  ${props => props.variant === "contained" && `
    position: absolute !important;
    color: white;
    padding: 1rem;
    margin-left: 2rem;
    font-size: 2rem !important;
    
    &::before {
      content: "";
      border-radius: 18px;
      position: absolute;
      width: 200%;
      height: 100%;
      top: 0;
      left: -90%;
      background-color: #BF3604;
      z-index: -1;
    }
  `}

  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

export default SectionTitle;