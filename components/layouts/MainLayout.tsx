import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { MainHeader, MainFooter } from "../elements";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
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

      <MainFooter />
    </Box>
  )
}

export default MainLayout;
