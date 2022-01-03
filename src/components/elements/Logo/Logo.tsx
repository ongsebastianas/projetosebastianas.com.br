import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

interface ILogoProps {
  logoMode: "original" | "white" | "black";  
}

const Logo: React.FC<ILogoProps> = () => {
  return (
    <StaticImage
      alt="Logo do Projeto SEBASTIANAS"
      src={"../../../images/headerLogo.svg"}

      style={{
        display: "flex",
        height: "100%"
      }}

      imgStyle={{
        objectFit: "contain"
      }}
    />
  )
}

export default Logo;