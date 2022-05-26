import Image, { ImageProps } from "next/image";
import styled, { css } from "styled-components";

type LogoVariant = "original" | "rounded";
type LogoColor = "full-white" | "full-black" | "color";

interface ILogoProps extends Partial<ImageProps> {
  color?: LogoColor;
  variant?: LogoVariant;
}

const getFullBlackStyles = css`
  filter: brightness(0%);
`;

const getFullWhiteStyles = css`
  filter: brightness(0%) invert(100%);
`;

type Styles = ReturnType<typeof css>;

const getColorStyles = (color: LogoColor): ReturnType<typeof css> => {
  const colorStylesMap: Record<LogoColor, Styles> = {
    "full-white": getFullWhiteStyles,
    "full-black": getFullBlackStyles,
    "color": css``
  }

  return colorStylesMap[color];
}

const StyledLogo = styled(Image)<ILogoProps>`
  ${props => getColorStyles(props.color || "color")};
  cursor: ${props => props.onClick ? "pointer" : "inherit"};
`;

const Logo: React.FC<ILogoProps> = (props) => {
  const logoVariantSourceMap: Record<LogoVariant, string> = {
    original: "/assets/logos/logo.svg",
    rounded: "/assets/logos/rounded-logo.svg"
  } 

  const {
    alt = "Logo do projeto Sebastianas", 
    variant = "original",
    color = "color", 
    ...rest 
  } = props;

  return (
    <StyledLogo 
      height={"100%"}
      width={"100%"}
      src={logoVariantSourceMap[variant]} 
      {...rest} 
    />
  );
};

export default Logo;