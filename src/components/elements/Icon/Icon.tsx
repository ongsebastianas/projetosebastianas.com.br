import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import * as Icons from "react-icons/fa";

interface IIconProps extends IconBaseProps {
  icon?: string;
}

const Icon: React.FC<IIconProps> = ({ 
  children, 
  icon,
  ...props
}) => {
  const IconComponent = Icons[icon] as IconType;
  
  if (!IconComponent)
    throw new Error("O ícone não foi encontrado. Por favor, verifique o nome fornecido.");

  return (
    <IconComponent
      {...props}
    />
  )
}

export default Icon;