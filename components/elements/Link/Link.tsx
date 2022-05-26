import { Link as ChakraLink, StyleProps } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface IHeaderLinkProps extends LinkProps, PropsWithChildren<{}> {
  styleProps?: StyleProps
}

const Link = ({ children, styleProps, ...props }: IHeaderLinkProps) => (
  <NextLink {...props}>
    <ChakraLink {...styleProps}>
      { children }
    </ChakraLink>
  </NextLink>
)

export default Link;