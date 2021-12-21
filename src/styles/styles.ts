import styled from 'styled-components'

// TODO: Put important styled components in components directory

export const Page = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2em;
  font-family: 'Inter', sans-serif;
  width: 100vw;
`
export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5em;
  padding-left: 0.5em;
`

export const Title = styled.h1`
  font-size: 2.3rem;
  display: block;
  margin-bottom: 4vh;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  &:hover {
    transition: 0.5s;
    background-color: ${props => props.theme.colors.secondary};
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 1em;
  border: 1px solid white;
  border-radius: 5px;
  &:hover {
    border: 1px solid ${props => props.theme.colors.grey};
    border-radius: 5px;
  }
`

export const ToDoButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0%;
  ${Wrapper}:hover & {
    opacity: 1;
  }
`

export const Button = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  text-align: center;
  padding: 5px 15px;
  border-radius: 0 5px 5px 0;
  outline: 0;
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid ${props => props.theme.colors.secondary};
  &:hover {
    box-shadow: 1px 2px 2px black;
    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid transparent;
  }
`
