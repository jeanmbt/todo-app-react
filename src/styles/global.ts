import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    color: ${props => props.theme.colors.text};
  }

  body {

    background: ${props => props.theme.colors.background};
    /* font-size: 14px;
    margin: 0; */
    color: ${props => props.theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  `;

  export default GlobalStyle