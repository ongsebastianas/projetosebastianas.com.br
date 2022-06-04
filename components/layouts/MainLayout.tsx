import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { MainHeader } from "../elements";

const Main = styled.main`
  display: flex;  
  flex-direction: column;
`;

type Props = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Box>
      <MainHeader />

      <Main>
        { children }
      </Main>
    </Box>
  )
}

export default MainLayout;