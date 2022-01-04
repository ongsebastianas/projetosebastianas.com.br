import React, { HTMLProps } from "react";

export interface ILinkProps extends HTMLProps<HTMLAnchorElement> {
  icon?: React.ReactNode;
}