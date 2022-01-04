import React from "react";

import StyledButton from "./StyledButton";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  children,
  variant,
  color,
  fullWidth
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      fullWidth={fullWidth}
    >
      { children }
    </StyledButton>
  )
}

export default Button;