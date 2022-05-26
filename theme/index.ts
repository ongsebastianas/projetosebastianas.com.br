import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import brand from "./colors/brand";
import green from "./colors/green";

import Button from "./components/Button";
import Input from "./components/Input";
import Link from "./components/Link";

const theme = extendTheme(
  {
    fonts: {
      heading: "Alegreya, serif",
      body: "Alegreya Sans, sans-serif"
    },
    colors: {
      brand,
      green
    },
    components: {
      Button,
      Link,
      Input,
      InputGroup: {
        fields: {
          borderRadius: "50px"
        }
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Button"],
  })
);

export default theme;