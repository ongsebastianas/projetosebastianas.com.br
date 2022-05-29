import { Box, chakra } from "@chakra-ui/react"
import { MainHeader } from "@components/elements"

const PageWrapper = chakra("div", {
  baseStyle: { 
    display: "flex",
    flexFlow: "column",
    height: "100vh"
  }
})

const ContentWrapper = chakra("div", {
  baseStyle: {
    flex: "1",
    width: "100%",
    backgroundColor: "green.50",
    backgroundImage: "assets/images/repeatingBackground.svg",
    display: "flex",
    justifyContent: "center",
    alignItems: "center" 
  }
});

const Form = chakra("main", {
  baseStyle: { 
    position: "relative",
    overflow: "hidden",
    padding: "2rem",
    backgroundColor: "white",
    borderRadius: { base: "0", md: "7.5px" },
    width: { base: "100%", md: "35vw" },
    height: { base: "100%", md: "auto" }
  }
})

type FormLayoutProps = {
  children: React.ReactNode;
}

const FormLayout = (props: FormLayoutProps) => {
  return (
    <PageWrapper>
      <MainHeader />

      <ContentWrapper>
        <Form>
          { props.children }
        </Form>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default FormLayout;