import { HTMLProps } from "react";
import { PageColors } from "../../../constants";

export type IButtonVariant = "contained" | "outlined" | "transparent";

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: IButtonVariant;
  color?: PageColors;
}