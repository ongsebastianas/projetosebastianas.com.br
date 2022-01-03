import styled from "styled-components";

const StyledMainHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
  width: 100vw;
  padding: 10px 7.5rem;
  position: relative;
  top: 0;
  box-shadow: ${props => props.theme.shadows.small};
`;

export default StyledMainHeader;