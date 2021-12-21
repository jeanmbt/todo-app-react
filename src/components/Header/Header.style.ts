import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 2.5em;
  background: ${props => props.theme.colors.primary};
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.colors.text};
  & > div {
    width: 100vw;
}
  `