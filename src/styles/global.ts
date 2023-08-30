import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html{
    font: 400 10px 'Inter', sans-serif;
    color: #FFFFFF;

  }

    /* Estiliza a barra de rolagem */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Estiliza a pista da barra de rolagem */
  ::-webkit-scrollbar-track {
    background-color: #17151C;
  }

  /* Estiliza o polegar da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    background-color: #4D2457;
  }

`