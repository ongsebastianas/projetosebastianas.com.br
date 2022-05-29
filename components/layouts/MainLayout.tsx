import { Box, chakra, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { Logo, Link, MainHeader } from "../elements";
import { useRouter } from "next/router";
import { device } from "theme/breakpoints";

const Main = styled.main`
  padding: 1rem 2rem;
  position: relative;

  @media ${device.laptop} {
    padding: 1rem 5rem;
  }
`;

type Props = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Box>
      <MainHeader />

      <Main>
        { children }
      </Main>
    </Box>
  )
}

export default MainLayout;