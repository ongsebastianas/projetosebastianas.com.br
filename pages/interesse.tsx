import { Box, Button, Center, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, HStack, Input, Progress, Radio, RadioGroup, TabPanel, TabPanels, Tabs, Text, useRadioGroup, useToast, VStack } from "@chakra-ui/react";
import { RadioButton } from "@components/elements";
import { FormLayout } from "@components/layouts";
import Image from "next/image";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useController, useForm, UseFormReturn } from "react-hook-form";
import { NextPageWithLayout } from "../types";

type InteresseFormData = {
  fullName: string;
  email: string;
  gender: string;
  income: number;
}

type FormStepComponentProps = {
  form: UseFormReturn<InteresseFormData>
}

const NameEmailStep = (props: FormStepComponentProps) => {
  const { formState, register } = props.form;

  return (
    <>
      <FormControl isInvalid={!!formState.errors.fullName}>
        <FormLabel htmlFor="fullName">Qual é seu nome completo?</FormLabel>
        <Input
          id="fullName"
          {
          ...register("fullName", {
            required: {
              value: true,
              message: "Por favor, preencha seu nome completo"
            }
          })
          }
        />
        <FormErrorMessage>
          {formState.errors.fullName && formState.errors.fullName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!formState.errors.email}>
        <FormLabel htmlFor="email">Qual é seu e-mail?</FormLabel>
        <Input
          id="email"
          type="email"
          {
          ...register("email", {
            required: {
              value: true,
              message: "Por favor, preencha seu e-mail"
            },
            pattern: {
              value: /@.*?\./,
              message: "Por favor, digite um e-mail válido"
            }
          })
          }
        />
        <FormErrorMessage>
          {formState.errors.email && formState.errors.email.message}
        </FormErrorMessage>
      </FormControl>
    </>
  )
}

const GenderIncomeStep = (props: FormStepComponentProps) => {
  const genderOptions = ["Feminino", "Masculino", "Prefiro não informar"];
  const { field: genderField } = useController({
    control: props.form.control,
    name: "gender",
    rules: {
      required: {
        value: true,
        message: "Por favor, selecione uma opção de gênero."
      }
    }
  });

  const {
    getRadioProps: getGenderRadioProps,
    getRootProps: getGenderRootProps
  } = useRadioGroup({
    name: "gender",
    onChange: genderField.onChange,
    value: genderField.value
  });

  const incomeRangeOptions = [
    "Até um salário mínimo",
    "De um até dois salários mínimos",
    "De dois até três salários mínimos",
    "Mais de três salários mínimos"
  ];
  const { field: incomeRangeField } = useController({
    control: props.form.control,
    name: "income",
    rules: {
      required: {
        value: true,
        message: "Por favor, selecione uma opção de renda."
      }
    }
  });

  const {
    getRadioProps: getIncomeRangeRadioProps,
    getRootProps: getIncomeRangeRootProps
  } = useRadioGroup({
    name: "income",
    onChange: incomeRangeField.onChange,
    value: incomeRangeField.value
  });

  const { formState, register } = props.form;

  return (
    <>
      <FormControl isInvalid={!!formState.errors.gender}>
        <FormLabel htmlFor="gender">Com qual gênero você se identifica?</FormLabel>

        <HStack display={"flex"}>
          {
            genderOptions.map(gender => {
              const radio = getGenderRadioProps({ value: gender });

              return (
                <RadioButton key={gender} {...radio}>
                  {gender}
                </RadioButton>
              )
            })
          }
        </HStack>

        <FormErrorMessage>
          {formState.errors.gender && formState.errors.gender.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!formState.errors.income}>
        <FormLabel htmlFor="income">Qual é sua renda familiar?</FormLabel>
        <FormHelperText marginTop={0} marginBottom={"1rem"}>A renda familiar é a soma da renda individual dos moradores de uma mesma residência.</FormHelperText>

        <VStack alignItems={"flex-start"}>
          {
            incomeRangeOptions.map(range => {
              const radio = getIncomeRangeRadioProps({ value: range });

              return (
                <Radio key={range} {...radio}>{range}</Radio>
              )
            })
          }
        </VStack>

        <FormErrorMessage>
          {formState.errors.income && formState.errors.income.message}
        </FormErrorMessage>
      </FormControl>
    </>
  )
}

const Interesse: NextPageWithLayout = () => {
  const [isSubmittingData, setIsSubmittingData] = useState(false);
  const [hasSubmittedData, setHasSubmittedData] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const form = useForm<InteresseFormData>();
  const toast = useToast();

  const formSteps = [{
    component: NameEmailStep,
    fields: ["fullName", "email"]
  }, {
    component: GenderIncomeStep,
    fields: ["gender", "income"]
  }];

  const handlePreviousStep = () => setFormStep(formStep - 1);
  const handleNextStep = () => setFormStep(formStep + 1);

  const navigateToFieldWithError = (errors: { [k in keyof InteresseFormData]?: any }) => {
    for (const field of Object.keys(errors) as Array<keyof typeof errors>) {
      if (errors[field] == undefined) continue;

      const newPanelIndex = formSteps.findIndex(p => p.fields.includes(field));
      setFormStep(newPanelIndex);
      return;
    }
  }

  const handleFormError: SubmitErrorHandler<InteresseFormData> = (errors) =>
    navigateToFieldWithError(errors);

  const handleSubmit: SubmitHandler<InteresseFormData> = async (data) => {
    const formData = new FormData()
    formData.append("name", data.fullName)
    formData.append("email", data.email)
    formData.append("gender", data.gender.toLowerCase())

    setIsSubmittingData(true)
    const result = await fetch("https://projetosebastianas.com.br/wp-json/wp/v2/interested-person", {
      method: "POST",
      body: formData
    })

    setIsSubmittingData(false)
    if (result.status >= 400) {
      const resultJson = await result.json()

      toast({
        status: "error",
        title: "Ocorreu um erro no registro.",
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
            <Flex direction={"column"} gap={"2rem"} textAlign={"center"}>
              <Heading>Fique de olho no seu e-mail!</Heading>

              <Center height={"12rem"} position={"relative"}>
                <Image
                  layout={"fill"}
                  alt={"Ilustração"}
                  src={"/assets/images/thinkingGirl.svg"}
                />
              </Center>

              <Text>Por lá entraremos em contato para te passar mais informações.</Text>
            </Flex>
          )
          : (
            <>
              <Progress
                value={(formStep + 1) / formSteps.length * 100}
                position={"absolute"}
                top={{ base: "auto", md: "0" }}
                bottom={"0"}
                left={"0"}
                width={"100%"}
              />

              <Tabs index={formStep}>
                <TabPanels>
                  {
                    formSteps.map(({ component: StepComponent }, index) => (
                      <TabPanel key={"panel-" + index} padding={"none"} margin={"none"} display={"flex"} flexDir={"column"} gap={"1rem"}>
                        <StepComponent form={form} />
                      </TabPanel>
                    ))
                  }
                </TabPanels>
              </Tabs>

              <Flex gap={"1rem"} marginTop={{ base: "auto", md: "0" }}>
                <Button hidden={formStep == 0} flex={"1"} onClick={handlePreviousStep} variant={"ghost"}>Anterior</Button>
                <Button hidden={formStep + 1 == formSteps.length} flex={"1"} onClick={handleNextStep}>Continuar</Button>
                <Button
                  isLoading={isSubmittingData}
                  hidden={formStep + 1 != formSteps.length}
                  flex={"1"}
                  onClick={form.handleSubmit(handleSubmit, handleFormError)}
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

Interesse.getLayout = (page) => {
  return (
    <FormLayout>
      {page}
    </FormLayout>
  )
}

export default Interesse;