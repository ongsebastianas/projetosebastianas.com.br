import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Alegreya:wght@500;600&family=Open+Sans:wght@400;700&display=swap'); 
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: "Open-Sans", sans-serif;
  }
`
  
export default GlobalStyle;