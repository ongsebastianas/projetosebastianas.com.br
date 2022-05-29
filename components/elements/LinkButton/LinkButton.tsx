import { Button, ChakraProps } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link"
import { ReactNode } from "react";

type LinkButtonProps = {
  // @todo
  // Verificar se tem uma forma melhor de
  // adicionar a possibilidade de modificar as props do botão também
  buttonProps: ChakraProps;
  children?: ReactNode
} & LinkProps;

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link {...props}>
      <Button {...props.buttonProps} as={"a"}>
        { props.children }
      </Button>
    </Link>
  )
}

export default LinkButton;