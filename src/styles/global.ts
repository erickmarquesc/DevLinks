import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body, input, textarea  {
    font: 400 1rem 'Roboto', sans-serif;
    color: #FFFFFF;
  };
`