import { Button, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { default as NextLink } from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { device } from 'theme/breakpoints';
import { LinkButton } from '@components/elements';

const Title = styled.h1`
  font-weight: 500;
  font-family: 'Alegreya', sans-serif;
  font-size: 2.5rem;
  line-height: 1;
  color: black;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  font-family: 'Alegreya Sans', sans-serif;
  color: #656565;

  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

const Home: NextPage = () => {
  return (
    <Flex paddingY={"4rem"} direction={{ base: "column-reverse", md: "row" }} gap={"2rem"}>
      <Flex 
        flex={1} 
        direction={"column"} 
        gap={"3rem"} 
        alignItems={{ base: "center", md: "flex-start" }} 
        textAlign={{ base: "center", md: "start" }}
      >
        <Title>Acreditar em si mesma, <wbr /> faz toda a diferença.</Title>
        <Subtitle>Sebastianas - Empreendedorismo raiz foi idealizado para contribuir de forma social com a mudança da realidade de centenas de mulheres de baixa renda através do fomento do empreendedorismo.</Subtitle>
        
        <LinkButton href={"/interesse"} buttonProps={{ paddingX: "3rem" }}>
          Quero participar
        </LinkButton>
      </Flex>

      <Flex flex={1} position={"relative"} minHeight={"10rem"}>
        <Image 
          alt={"Ilustração da página principal"}
          layout={"fill"}
          src={"/assets/images/girls.svg"}
        />
      </Flex>
    </Flex>
  )
}

export default Home
