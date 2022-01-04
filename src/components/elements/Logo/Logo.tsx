import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

// Não é possível usar styled-components com o gatsby-plugin-image
// decidi por usar css normal mesmo
import "./Logo.css";

type LogoColor = "original" | "white" | "black";

interface ILogoProps {
  logoColor: LogoColor;  
}

const Logo: React.FC<ILogoProps> = ({ logoColor }) => {
  return (
    <StaticImage
      alt="Logo do Projeto SEBASTIANAS"
      src={"../../../images/headerLogo.svg"}

      className="logo-container"
      imgClassName={`logo ${logoColor}`}

      imgStyle={{
        objectFit: "contain"
      }}
    />
  )
}

export default Logo;