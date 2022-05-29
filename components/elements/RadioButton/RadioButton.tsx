import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";

type RadioButtonProps = {
  children: React.ReactNode;
} & UseRadioProps;

const RadioButton = (props: RadioButtonProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label' flex={"auto"} alignSelf={"stretch"}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'brand.500',
          color: 'white',
          borderColor: 'brand.500',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={1}
        textAlign={"center"}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default RadioButton;