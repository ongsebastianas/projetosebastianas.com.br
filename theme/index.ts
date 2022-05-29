import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import brand from "./colors/brand";
import green from "./colors/green";

import Button from "./components/Button";
import FormLabel from "./components/FormLabel";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Link from "./components/Link";
import Progress from "./components/Progress";
import Radio from "./components/Radio";

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
      FormLabel,
      Progress,
      Radio,
      Heading,
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