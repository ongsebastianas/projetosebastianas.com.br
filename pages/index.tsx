import { Box, chakra, Flex, Icon } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { LinkButton, Oferecimento, OferecimentoAside, OferecimentoContentWrapper, OferecimentoDescription, OferecimentoTitle, Section, SectionSubtitle, SectionTitle } from '@components/elements';
import React from 'react';
import { GroupIcon, HandWithHeartIcon, LightbulbIcon } from '@components/icons';

const IntroductionSection = chakra(Section, {
  baseStyle: {
    paddingY: "5rem !important",
    flexDirection: { base: "column-reverse", lg: "row" },
    gap: "2rem"
  }
});

const IntroductionSectionWrapper = chakra(Flex, {
  baseStyle: {
    flex: 1,
    flexDirection: "column",
    gap: "3rem",
    alignItems: { base: "center", lg: "flex-start" },
    textAlign: { base: "center", lg: "start" }
  }
});

const OferecimentosSectionContent = chakra(Flex, {
  baseStyle: {
    marginTop: "20vh",
    flexDirection: "column",
    gap: "4rem"
  }
});

const OferecimentosSection = chakra(Section, {
  baseStyle: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    paddingY: "4rem !important"
  }
});

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <IntroductionSection>
        <IntroductionSectionWrapper>
          <SectionTitle>Acreditar em si mesma, <wbr /> faz toda a diferença.</SectionTitle>
          <SectionSubtitle>Sebastianas - Empreendedorismo raiz foi idealizado para contribuir de forma social com a mudança da realidade de centenas de mulheres de baixa renda através do fomento do empreendedorismo.</SectionSubtitle>

          <LinkButton href={"/interesse"} buttonProps={{ paddingX: "3rem" }}>
            Quero participar
          </LinkButton>
        </IntroductionSectionWrapper>

        <Flex flex={1} position={"relative"} minHeight={"10rem"}>
          <Image
            alt={"Ilustração da página principal"}
            layout={"fill"}
            src={"/assets/images/girls.svg"}
          />
        </Flex>
      </IntroductionSection>

      <OferecimentosSection>
        <Box>
          <SectionTitle sansSerif variant={"contained"}>O que <strong>oferecemos</strong></SectionTitle>
        </Box>

        <Box position={"absolute"} display={{ base: "none", lg: "block" }} top={{ base: "4rem", lg: "0" }} right={"10%"} height={"20vw"} width={"20vw"}>
          <Image layout={"fill"} src={"/assets/images/computer.svg"} alt={""} />
        </Box>

        <OferecimentosSectionContent>
          {/* Os 20vw são para evitar que o texto fique em baixo da imagem acima */}
          <Oferecimento>
            <OferecimentoAside>
              <Image src={LightbulbIcon} alt={""} />
            </OferecimentoAside>

            <OferecimentoContentWrapper>
              <OferecimentoTitle>
                Workshops temáticos:
              </OferecimentoTitle>

              <OferecimentoDescription marginRight={{ base: "0", lg: "30vw" }}>
                Workshops temáticos online e presenciais, voltados ao público feminino, 
                desenvolvidos de acordo com as competências a serem trabalhadas. 
              </OferecimentoDescription>
            </OferecimentoContentWrapper>
          </Oferecimento>

          <Oferecimento>
            <OferecimentoAside>
              <Image src={GroupIcon} alt={""} />
            </OferecimentoAside>

            <OferecimentoContentWrapper>
              <OferecimentoTitle>
                Programas de mentoria em grupo:
              </OferecimentoTitle>

              <OferecimentoDescription>
                Visando atingir um público maior, desenvolvo e adapto minha metodologia
                às necessidades do grupo, o que possibilita networking, mais engajamento e ânimo,
                uma vez que é estimulada a troca entre os alunos.
              </OferecimentoDescription>
            </OferecimentoContentWrapper>
          </Oferecimento>

          <Oferecimento>
            <OferecimentoAside>
              <Image src={HandWithHeartIcon} alt={""} />
            </OferecimentoAside>

            <OferecimentoContentWrapper>
              <OferecimentoTitle>
                Palestras transformacionais:
              </OferecimentoTitle>

              <OferecimentoDescription>
                Baseadas em metodologias que refletem no comportamento cognitivo das pessoas e que
                provocam um estado de contemplação para tomada de decisão. O público é conduzido à
                autorreflexão a um olhar interior, resultando em descobertas e novos pontos de vista. 
              </OferecimentoDescription>
            </OferecimentoContentWrapper>
          </Oferecimento>
        </OferecimentosSectionContent>
      </OferecimentosSection>
    </React.Fragment>

  )
}

export default Home
