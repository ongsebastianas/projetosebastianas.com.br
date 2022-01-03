import React from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import GlobalStyle from "../../globalStyles";
import { theme } from "../../constants";
import { MainHeader } from "../elements";

const MainLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@500;600&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />

      <MainHeader />

      <main>
        {children}
      </main>
    </ThemeProvider>
  )
}

export default MainLayout;