import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, chakra, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Logo from "../Logo/Logo";

const Header = chakra('header', {
  baseStyle: {
    padding: '1rem 3rem',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    boxShadow: '0px 6px 12px 0px rgba(0, 0, 0, 0.07)',
    backgroundColor: "white"
  }
});

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

const MainHeader = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  return (
    <Header>
      <Flex position={"relative"} height={"2.5rem"} flex={1}>
        <Logo onClick={() => router.push("/")} />
      </Flex>

      <Flex hidden={isMobile} alignItems={"center"} gap={"2rem"}>
        {
          menuItems.map(item => (
            <Link key={item.text} href={item.href}>{item.text}</Link>
          ))
        }
      </Flex>

      <Box hidden={!isMobile}>
        <Menu>
          <MenuButton as={IconButton} icon={<ChevronDownIcon />} />

          <MenuList>
            {
              menuItems.map(item => (
                <MenuItem onClick={() => router.push(item.href)} key={item.text}>{item.text}</MenuItem>
              ))
            }
          </MenuList>
        </Menu>
      </Box>
    </Header>
  )
}

export default MainHeader;