type Colors = "pessego" | "vermelho" | "verde-claro" | "verde-escuro" | "cinza";

interface ITheme {
  colors: { [color in Colors]: string }
}

export const theme: ITheme = {
  colors: {
    "pessego": "#F2935C",
    "vermelho": "#BF3604",
    "verde-claro": "#628F6F",
    "verde-escuro": "#022601",
    "cinza": "#656565"
  }
};