import styled from "styled-components";
import { IButtonProps } from "./types";

const StyledButton = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;  

  height: 40px;
  width: ${props => props.fullWidth ? "100%" : "auto"};

  background-color: ${props => props.variant == "contained" ? props.theme.colors[props.color] : "transparent"};
  border: ${props => props.variant == "transparent" ? "none" : `1px solid ${props.theme.colors[props.color]}`};
  border-radius: 50px;
  padding: 10px 30px;
  
  cursor: pointer;

  color: ${props => props.variant == "contained" ? "white" : props.theme.colors[props.color]};
  font-weight: 700;

  & > .icon {
    margin-right: 0.5rem;
  }
`;

StyledButton.defaultProps = {
  color: "vermelho",
  variant: "contained"
}

export default StyledButton;
