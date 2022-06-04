import { chakra } from "@chakra-ui/react";

const Oferecimento = chakra("div", {
  baseStyle: {
    display: "flex",
    flexDirection: { base: "column", lg: "row" },
    gap: "2rem"
  }
});

const OferecimentoAside = chakra("div", {
  baseStyle: {
    width: { base: "100%", lg: "5rem" }
  }
});

const OferecimentoContentWrapper = chakra("div", {
  baseStyle: {
    display: "flex",
    flexDirection: "column"
  }
});

const OferecimentoTitle = chakra("h3", {
  baseStyle: {
    textTransform: "uppercase",
    color: "brand.500",
    fontFamily: "'Alegreya Sans', sans-serif",
    fontWeight: "700",
    fontSize: "1.5rem",
    lineHeight: "100%",
    marginBottom: "1.5rem"
  }
});

const OferecimentoDescription = chakra("p", {
  baseStyle: {
    color: "black",
    fontFamily: "'Alegreya Sans', sans-serif",
    fontWeight: "400",
    fontSize: "1.5rem",
    lineHeight: "32px",
    marginRight: { base: "0", lg: "15vw" },
    textAlign: "justify"
  }
});

export {
  Oferecimento,
  OferecimentoAside,
  OferecimentoTitle,
  OferecimentoDescription,
  OferecimentoContentWrapper
}