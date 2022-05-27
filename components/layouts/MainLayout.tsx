import { Box, chakra, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { Logo, Link } from "../elements";
import { useRouter } from "next/router";
import { device } from "theme/breakpoints";

const Header = styled.header`
  padding: 1rem 3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.07);
`;

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

type MenuItem = {
  text: string;
  href: string;
}

const menuItems: MenuItem[] = [{
  text: "Quem somos",
  href: "/quem-somos"
}, {
  text: "Blog",
  href: "/blog",
}]

const MainLayout = ({ children }: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  return (
    <Box>
      <Header>
        <Flex position={"relative"} height={"2.5rem"} flex={1}>
          <Logo onClick={() => router.push("/")} />
        </Flex>

        <Flex hidden={isMobile} alignItems={"center"} gap={"2rem"}>
          {
            menuItems.map(item => (
              <Link key={item.text} href={item.href}>{ item.text }</Link>
            ))
          }
        </Flex>

        <Box hidden={!isMobile}>
          <Menu>
            <MenuButton as={IconButton} icon={<ChevronDownIcon />} />

            <MenuList>
              {
                menuItems.map(item => (
                  <MenuItem onClick={() => router.push(item.href)} key={item.text}>{ item.text }</MenuItem>
                ))
              }
            </MenuList>
          </Menu>
        </Box>
      </Header>

      <Main>
        { children }
      </Main>
    </Box>
  )
}

export default MainLayout;