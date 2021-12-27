import styled from 'styled-components'

// const { colors } = useContext(ThemeContext)

export const StyledToDoInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  flex: wrap;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 0.5em;
  
`; 
