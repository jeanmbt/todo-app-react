import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    *:focus {
      outline: none;
      transition: 0.3s;
      background-color: ${props => props.theme.colors.selection};
    }
  input {
    background: transparent;
    *:focus {

    }
  }
  }
  
  body {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};


    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  `;

  export default GlobalStyle