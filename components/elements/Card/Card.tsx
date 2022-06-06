import { chakra } from "@chakra-ui/react";

const Card = chakra("div", {
  baseStyle: {
    flex: "1",
    width: "18rem",
    display: "inline-flex",
    flexDirection: "column",
    gap: "0.75rem",
    scrollSnapAlign: "start"
  }
});

const CardImage = chakra("img", {
  baseStyle: {
    width: "100%",
    aspectRatio: "6/4",
    borderRadius: "10px",
    backgroundColor: "lightgray"
  }
});

const CardTag = chakra("div", {
  baseStyle: {
    borderRadius: "50px",
    border: "1px solid currentColor",
    color: "rgba(110, 110, 110, 1)",
    paddingX: "2.5rem",
    alignSelf: "flex-start",
    textAlign: "center",
    fontSize: "1.25rem"
  }
});

const CardText = chakra("div", {
  baseStyle: {
    display: "flex",
    flexDirection: "column"
  }
});

const CardDate = chakra("time", {
  baseStyle: {
    fontSize: "1rem",
    opacity: "0.7",
    marginBottom: "0.75rem"
  }
})

const CardTitle = chakra("h4", {
  baseStyle: {
    fontSize: "1.25rem",
    lineHeight: "100%",
    marginBottom: "0",
    wordWrap: "break-word"
  }
});

const CardDescription = chakra("p", {

});

export {
  Card,
  CardImage,
  CardDescription,
  CardTag,
  CardText,
  CardDate,
  CardTitle
}
