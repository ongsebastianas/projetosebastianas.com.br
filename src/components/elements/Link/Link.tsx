import React, { HTMLProps } from "react";

import StyledLink from "./StyledLink";
import { ILinkProps } from "./types";

const Link: React.FC<ILinkProps> = ({ 
  children, 
  href, 
  className,
  icon,
  ...props
}) => {
  return (
    <StyledLink
      href={href}
      className={className}
      {...props}
    >
      { icon }
      { children }
    </StyledLink>
  )
}

export default Link;