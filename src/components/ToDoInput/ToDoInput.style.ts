import styled from 'styled-components'

// import { useContext } from 'react';
// import { darkTheme } from '../../styles/themes/darkTheme';
import { lightTheme } from '../../styles/themes/lightTheme';
// import { ThemeContext } from 'styled-components';

// const { colors } = useContext(ThemeContext)

export const StyledToDoInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 1px solid ${lightTheme.colors.grey};
  flex: wrap;
  width: 100%;

`; 
