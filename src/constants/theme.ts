export type PageColors = "pessego" | "vermelho" | "verde-claro" | "verde-escuro" | "cinza" | "branco";
export type ShadowElevation = "small";

export interface ITheme {
  colors: { [color in PageColors]: string },
  shadows: { [elevation in ShadowElevation]: string }
}

export const theme: ITheme = {
  colors: {
    "pessego": "#F2935C",
    "vermelho": "#BF3604",
    "verde-claro": "#628F6F",
    "verde-escuro": "#022601",
    "cinza": "#656565",
    "branco": "#FFF"
  },
  shadows: {
    "small": "0px 2px 29px 1px rgba(0, 0, 0, 0.1)"
  }
};