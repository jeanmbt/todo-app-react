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
  border-radius: 5px;
  &:hover {
    transition: 0.5s;
    background-color: ${props => props.theme.colors.secondaryBright};
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 1em;
  border: 1px solid ${props => props.theme.colors.background};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.background} ;
  &:hover {
    box-shadow: 1px 2px 2px ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.background}
    input {
      transition: 0.3s;
      background-color: ${props => props.theme.colors.secondaryBright};
      border-bottom: 1px solid transparent;
    }
  }

`

export const ToDoButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0%;
  color: ${props => props.theme.colors.text};
  ${Wrapper}:hover & {
    transition: 0.3s;
    opacity: 1;
  }
`

export const Button = styled.div`
  background-color: ${props => props.theme.colors.grey};
  color: white;
  text-align: center;
  padding: 5px 15px;
  border-radius: 0 5px 5px 0;
  outline: 0;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    transition: 0.3s;
    background-color: ${props => props.theme.colors.secondary};
  }
`
export const TitleWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.secondary}; 
  min-width: 2em;
  max-width: 80vw;
  padding: 0 0.5em;
  &:hover {
    transition: 0.3s;
    box-shadow: 1px 2px 2px ${props => props.theme.colors.secondaryBright};
    background-color: ${props => props.theme.colors.secondaryBright};
    border-bottom: 1px solid transparent;
  }
`
