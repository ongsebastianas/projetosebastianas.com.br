import { chakra } from "@chakra-ui/react";

const SectionSubtitle = chakra("p", {
  baseStyle: {
    fontWeight: "400",
    fontFamily: "'Alegreya Sans', sans-serif",
    fontSize: { base: "1.25rem", lg: "1.5rem" },
    lineHeight: 1.2,
    color: "#656565"
  }
});

export default SectionSubtitle;