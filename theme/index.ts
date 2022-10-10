import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import brand from "./colors/brand";
import green from "./colors/green";

import Button from "./components/Button";
import FormLabel from "./components/FormLabel";
import Heading from "./components/Heading";
import FooterStyle from "./components/FooterStyle";
import Input from "./components/Input";
import Link from "./components/Link";
import Progress from "./components/Progress";
import Radio from "./components/Radio";

const theme = extendTheme(
  {
    fonts: {
      heading: "Alegreya, serif",
      body: "Alegreya Sans, sans-serif",
      FooterStyle: "Open Sans, sans-serif"
    },
    colors: {
      brand,
      green
    },
    components: {
      Button,
      Link,
      Input,
      FormLabel,
      Progress,
      Radio,
      Heading,
      FooterStyle,
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
