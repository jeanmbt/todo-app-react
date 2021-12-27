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
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    width: 100$;
    padding: 1em;
  }
  `