import React from "react";

import StyledButton from "./StyledButton";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  variant,
  color,
}) => {
  return (
    <StyledButton className={className} variant={variant} color={color}>
      { children }
    </StyledButton>
  )
}

export default Button;