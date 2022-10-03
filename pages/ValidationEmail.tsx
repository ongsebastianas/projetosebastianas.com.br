import { chakra, Button, Center, Flex, FormControl, FormErrorMessage, TabPanel, TabPanels, Tabs, useToast, Heading, Input, } from "@chakra-ui/react";
import Image from "next/image";
import { FormLayout } from "@components/layouts";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useController, useForm, UseFormReturn } from "react-hook-form";
import { NextPageWithLayout } from "../types";

type ValidationEmail = {
  email: string;
  token: string;
}

type ValidationEmailProps = {
  validation: UseFormReturn<ValidationEmail>
}

const GreenHighlightText = chakra("p", {
  baseStyle: {
    fontSize: '1.2rem',
  }
})

const ValidationEmailScreen = (props: ValidationEmailProps) => {
  const { formState, register } = props.validation;

  return (
    <Flex direction={"column"}>
      <GreenHighlightText>
        Por favor, digite o e-mail e o token enviado para o mesmo, para efetuar a verificação
     </GreenHighlightText>

      <Flex
      justify={"center"}
      flexDirection={"column"}
      marginTop={"2rem"}>
        <FormControl>
          <Input
            id="email"
            type="email"
            variant='filled'
            width={"100%"}
            boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.25)"}
            marginRight={"1rem"}
            placeholder="E-mail"
            {
              ...register("email", {
                required: {
                  value: true,
                  message: "Por favor, preencha seu e-mail"
                }
              })
              }
          />
        </FormControl>
        <FormErrorMessage>
          {formState.errors.email && formState.errors.email.message}
        </FormErrorMessage>
      </Flex>
      <br />

      <FormControl>
        <Input
          id="token"
          type="text"
          variant='filled'
          width={"100%"}
          boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.25)"}
          marginRight={"1rem"}
          placeholder="Token"
          {
            ...register("token", {
              required: {
                value: true,
                message: "Por favor, preencha seu token"
              }
            })
            }
          />
      </FormControl>
      <FormErrorMessage>
          {formState.errors.token && formState.errors.token.message}
      </FormErrorMessage>
    </Flex>
  )
}

const ValidationEmail: NextPageWithLayout = () => {
  const [isSubmittingData, setIsSubmittingData] = useState(false);
  const [hasSubmittedData, setHasSubmittedData] = useState(false);
  const formValidation = useForm<ValidationEmail>();
  const toast = useToast();

  const validationSteps = [{
    component: ValidationEmailScreen,
    fields: ["email", "token"]
  }]

  const handleValidation: SubmitHandler<ValidationEmail> = async (data) => {
    const formDataValidation = new FormData()
    formDataValidation.append("email", data.email)
    formDataValidation.append("token", data.token)

    setIsSubmittingData(true)
    const result = await fetch("https://projetosebastianas.com.br/wp-json/wp/v2/email-verification", {
      method: "POST",
      body: formDataValidation
    })

    setIsSubmittingData(false)
    if (result.status >= 400) {
      const resultJson = await result.json()

      toast({
        status: "error",
        title: "Dados Inválidos",
        description: (resultJson["message"] as string),
        isClosable: true
      })


      return


    }
    setHasSubmittedData(true)
}

return (
  <Flex direction={"column"} gap={"3rem"} height={"100%"}>
    {
      hasSubmittedData
        ? (
          <Flex direction={"column"} gap={"3rem"} height={"100%"}>
      <Flex direction={"column"} gap={"1rem"} textAlign={"center"}>
        <Heading fontSize={"2rem"}>E-mail verificado!</Heading>

        <Flex paddingLeft={"5rem"}>
          <Image
            width={"100rem"}
            height={"100rem"}
            alt={"Ilustração"}
            src={"/assets/images/comfirmationArrow.svg"}
          />
        </Flex>

        <Center height={"6rem"}>
          <Image
            height={"200rem"}
            width={"200rem"}
            alt={"Ilustração"}
            src={"/assets/images/girl.svg"}
          />
        </Center>
          <Button marginLeft={"6rem"} marginRight={"6rem"} onClick={() => {window.location.href = "https://projetosebastianas.com.br/"}}>Voltar para o Site</Button>
      </Flex>
    </Flex>)
        : (
          <>
              <Tabs>
                <TabPanels>
                  {
                    validationSteps.map(({ component: StepComponent }, index) => (
                      <TabPanel key={"panel-" + index} padding={"none"} margin={"none"} display={"flex"} flexDir={"column"} gap={"1rem"}>
                        <StepComponent validation={formValidation} />
                      </TabPanel>
                    ))
                  }
                </TabPanels>
              </Tabs>

              <Flex gap={"1rem"} marginTop={{ base: "auto", md: "0" }}>
                <Button
                  isLoading={isSubmittingData}
                  flex={"1"}
                  onClick={formValidation.handleSubmit(handleValidation)}
                >
                  Finalizar
                </Button>
              </Flex>
            </>
        )

    }
  </Flex>
)
}

ValidationEmail.getLayout = (page) => {
  return (
    <FormLayout>
      {page}
    </FormLayout>
  )
}

export default ValidationEmail;
