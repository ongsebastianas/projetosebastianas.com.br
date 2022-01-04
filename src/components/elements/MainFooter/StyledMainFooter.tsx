import styled from "styled-components";

const StyledMainFooter = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  padding: 3rem;
  width: 100vw;
  height: auto;

  background-color: ${props => props.theme.colors["verde-escuro"]};
`;

export default StyledMainFooter;