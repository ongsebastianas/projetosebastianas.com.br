import { chakra } from "@chakra-ui/react";

const Section = chakra("section", {
  baseStyle: {
    p: ["1rem 2rem", "1rem 5rem"],
    position: "relative",
    display: "flex"
  }
});

export default Section;

