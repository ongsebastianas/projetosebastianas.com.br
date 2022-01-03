import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../constants";

const MainLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

export default MainLayout;