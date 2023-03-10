import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body, input, textarea, h1, strong, button {
    font: 400 1rem 'Inter', sans-serif;
    color: #FFFFFF;
  };
`