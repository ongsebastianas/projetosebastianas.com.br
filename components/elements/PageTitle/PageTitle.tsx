import { chakra } from "@chakra-ui/react";
import styled from "styled-components";

const PageTitle = chakra('div', {
  baseStyle: {
    padding: "1.5rem",
    textAlign: "center",
    backgroundColor: "brand.500",
    width: "100%",
    position: "relative",
    top: "0",
    left: "0",
    color: "white",
    fontSize: "1.25rem",
    fontWeight: "500",
    backgroundImage: "assets/images/repeatingBackground.svg"
  }
});

export default PageTitle;
