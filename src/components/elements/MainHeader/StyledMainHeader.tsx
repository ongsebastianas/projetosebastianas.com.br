import styled from "styled-components";

const StyledMainHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 93px;
  width: 100vw;
  padding: 10px 3rem;
  position: relative;
  top: 0;
  box-shadow: ${props => props.theme.shadows.small};
`;

export default StyledMainHeader;