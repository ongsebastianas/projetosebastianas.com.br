import { Box, Center, chakra, Flex, Icon } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Card, CardDate, CardDescription, CardImage, CardTag, CardText, CardTitle, LinkButton, Oferecimento, OferecimentoAside, OferecimentoContentWrapper, OferecimentoDescription, OferecimentoTitle, Section, SectionSubtitle, SectionTitle, Link, ScrollSnapWrapper } from '@components/elements';
import React from 'react';
import { GroupIcon, HandWithHeartIcon, LightbulbIcon } from '@components/icons';

const IntroductionSection = chakra(Section, {
  baseStyle: {
    paddingY: "5rem !important",
    flexDirection: { base: "column-reverse !important", lg: "row !important" },
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
    marginTop: "8rem",
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

const EventosSection = chakra(Section, {
  baseStyle: {
    flexDirection: "column !important",
    gap: "2.5rem"
  }
});

const EventoCard = chakra(Card, {
  baseStyle: {
    flex: { base: "0 0 100%", lg: "auto" },
    minWidth: { base: "auto", lg: "18rem" }
  }
});

const ArtigoCard = chakra(Card, {
  baseStyle: {
    flex: { base: "0 0 100%", lg: "auto" }
  }
});

const ArtigosSection = chakra(Section, {
  baseStyle: {
    flexDirection: "column !important",
    gap: "2.5rem"
  }
});

const ArtigosSectionFooter = chakra(Flex, {
  baseStyle: {
    justifyContent: "flex-end"
  }
});

const ArtigosSectionAnnouncement = chakra(Link, {
  baseStyle: {
    color: "brand.500"
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

      <EventosSection hasRepeatingBackground>
        <Center width={"100%"}>
          <SectionTitle sansSerif variant={"outlined"} color={"white"}>Próximos eventos</SectionTitle>
        </Center>

        <ScrollSnapWrapper display={"flex"} gap={"2rem"}>
          <EventoCard>
            <CardImage src={""} objectFit={"contain"} />

            <CardText color={"white"}>
              <CardDate>03 de junho de 2022</CardDate>
              <CardTitle>Card de próximos eventos: título do evento vem aqui</CardTitle>
            </CardText>
          </EventoCard>

          <EventoCard>
            <CardImage src={""} objectFit={"contain"} />

            <CardText color={"white"}>
              <CardDate>03 de junho de 2022</CardDate>
              <CardTitle>Card de próximos eventos: título do evento vem aqui</CardTitle>
            </CardText>
          </EventoCard>

          <EventoCard>
            <CardImage src={""} objectFit={"contain"} />

            <CardText color={"white"}>
              <CardDate>03 de junho de 2022</CardDate>
              <CardTitle>Card de próximos eventos: título do evento vem aqui</CardTitle>
            </CardText>
          </EventoCard>

          <EventoCard>
            <CardImage src={""} objectFit={"contain"} />

            <CardText color={"white"}>
              <CardDate>03 de junho de 2022</CardDate>
              <CardTitle>Card de próximos eventos: título do evento vem aqui</CardTitle>
            </CardText>
          </EventoCard>

          <EventoCard>
            <CardImage src={""} objectFit={"contain"} />

            <CardText color={"white"}>
              <CardDate>03 de junho de 2022</CardDate>
              <CardTitle>Card de próximos eventos: título do evento vem aqui</CardTitle>
            </CardText>
          </EventoCard>


          <EventoCard>
            <CardImage src={""} objectFit={"contain"} />

            <CardText color={"white"}>
              <CardDate>03 de junho de 2022</CardDate>
              <CardTitle>Card de próximos eventos: título do evento vem aqui</CardTitle>
            </CardText>
          </EventoCard>

          <EventoCard>
            <CardImage src={""} objectFit={"contain"} />

            <CardText color={"white"}>
              <CardDate>03 de junho de 2022</CardDate>
              <CardTitle>Card de próximos eventos: título do evento vem aqui</CardTitle>
            </CardText>
          </EventoCard>

          <EventoCard>
            <CardImage src={""} objectFit={"contain"} />

            <CardText color={"white"}>
              <CardDate>03 de junho de 2022</CardDate>
              <CardTitle>Card de próximos eventos: título do evento vem aqui</CardTitle>
            </CardText>
          </EventoCard>

          <EventoCard>
            <CardImage src={""} objectFit={"contain"} />

            <CardText color={"white"}>
              <CardDate>03 de junho de 2022</CardDate>
              <CardTitle>Card de próximos eventos: título do evento vem aqui</CardTitle>
            </CardText>
          </EventoCard>
        </ScrollSnapWrapper>
      </EventosSection>

      <ArtigosSection>
        <Box alignSelf={"flex-start"}>
          <SectionTitle titleSublinePosition={"start"} variant={"outlined"}>Artigos</SectionTitle>
        </Box>

        <ScrollSnapWrapper hideArrowsOnDesktop display={"flex"} gap={"2rem"}>
          <ArtigoCard>
            <CardImage src={""} />

            <CardTag>Liderança</CardTag>

            <CardText>
              <CardDate>10 de janeiro de 2022</CardDate>
              <CardTitle>Exemplo de card para post no blog</CardTitle>
            </CardText>
          </ArtigoCard>

          <ArtigoCard>
            <CardImage src={""} />

            <CardTag>Liderança</CardTag>

            <CardText>
              <CardDate>10 de janeiro de 2022</CardDate>
              <CardTitle>Exemplo de card para post no blog</CardTitle>
            </CardText>
          </ArtigoCard>

          <ArtigoCard>
            <CardImage src={""} />

            <CardTag>Liderança</CardTag>

            <CardText>
              <CardDate>10 de janeiro de 2022</CardDate>
              <CardTitle>Exemplo de card para post no blog</CardTitle>
            </CardText>
          </ArtigoCard>

          <ArtigoCard>
            <CardImage src={""} />

            <CardTag>Liderança</CardTag>

            <CardText>
              <CardDate>10 de janeiro de 2022</CardDate>
              <CardTitle>Exemplo de card para post no blog</CardTitle>
            </CardText>
          </ArtigoCard>
        </ScrollSnapWrapper>

        <ArtigosSectionFooter>
          <ArtigosSectionAnnouncement styleProps={{ color: "brand.500", textTransform: "uppercase", letterSpacing: "0.15rem" }} href={"/blog"}>Ver mais artigos</ArtigosSectionAnnouncement>
        </ArtigosSectionFooter>
      </ArtigosSection>
    </React.Fragment>
  )
}

export default Home
