import { Box, chakra, Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { LinkButton } from '@components/elements';
import { useRouter } from "next/router";
import Logo from "../Logo/Logo";
import Image from "next/image";
import { WhatsIcon, InstagramIcon, FacebookIcon, LinkedinIcon } from '@components/icons';

const Footer = chakra('footer', {
  baseStyle: {
    padding: '1rem 3rem',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    boxShadow: '0px 6px 12px 0px rgba(0, 0, 0, 0.07)',
    backgroundColor: "#022601",
  }
});

const BlockTitle = chakra('h2', {
  baseStyle: {
    color: '#85B292',
  }
});

const BlockText = chakra('p', {
  baseStyle: {
    color: '#fff',
    fontSize: '1.5rem'
  }
});

const LinkMedia = chakra ('a', {
  baseStyle: {
    textDecoration: 'none',

  }
})

type MenuItem = {
  text: string;
  href: string;
}

const menuItems: MenuItem[] = [{
  text: "Página Inicial",
  href: "/"
}, {
  text: "Blog",
  href: "/blog",
}, {
  text: "Termos e Privacidade",
  href: "/",
}]

const MainFooter = () => {
  const router = useRouter();

  return (
    <Footer flexDirection={["column"]} gap={"1rem"}>
      <Flex flexDirection={["column", "column", "row"]} justifyContent={"space-around"} alignItems={"center"} gap={"2rem"}>
      <Flex>
          <Logo color="full-white" variant="rounded" width="171px" height="80px" onClick={() => router.push("/")} />
        </Flex>

        <Flex gap={"0.5rem"} flexDirection={"column"} >
          {
            menuItems.map(item => (
              <Link key={item.text} href={item.href} color={"green.50"} fontFamily={"FooterStyle"} fontSize={"0.8rem"}>{item.text}</Link>
            ))
          }
        </Flex>

        <Flex flexDirection={"column"}>
          <BlockTitle>CANAL DE ATENDIMENTO</BlockTitle>
          <Flex alignItems={"center"}>
            <Image width={"23px"} height={"23px"} alt={"Icone do Whatsapp"} src={WhatsIcon} />
            <BlockText marginLeft={"0.5rem"}>(21)99049-0436</BlockText>
          </Flex>
        </Flex>

        <Flex flexDirection={"column"}>
          <LinkButton href={"/interesse"} buttonProps={{ paddingX: "3rem" }}>
            Quero participar
          </LinkButton>
          <br />
          <Flex flexDirection={"column"}>
          <BlockTitle>SIGA NAS REDES SOCIAIS:</BlockTitle>
        <Flex marginTop={"0.5rem"}>
          <Flex marginRight={"0.5rem"}>
            <LinkMedia target={"_blank"} href={"https://www.instagram.com/projetosebastianas/"}><Image width={"23px"} height={"23px"} alt={"Icone do Whatsapp"} src={InstagramIcon} /></LinkMedia>
          </Flex>
          <Flex marginRight={"0.5rem"}>
            <LinkMedia target={"_blank"} href={"https://www.facebook.com/projetosebastianas"}>
              <Image width={"23px"} height={"23px"} alt={"Icone do Whatsapp"} src={FacebookIcon} />
            </LinkMedia>
          </Flex>
          <Flex marginRight={"0.5rem"}>
            <LinkMedia target={"_blank"} href={"https://www.linkedin.com/company/projeto-sebastianas/"}>
              <Image width={"23px"} height={"23px"} alt={"Icone do Whatsapp"} src={LinkedinIcon} />
            </LinkMedia>
          </Flex>
        </Flex>
      </Flex>
        </Flex>
      </Flex>

      <Flex justifyContent={"center"}>
        <BlockTitle color={"#fff"} opacity={"50%"} fontFamily={"Open Sans"} fontSize={"0.8rem"}>2022. Todos os Direitos Reservados</BlockTitle>
      </Flex>
    </Footer>


  )
}

export default MainFooter;
