import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', serif;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0px;
    font-family: 'Playfair Display', serif;
  }
  
  a, button {
    font-family: 'Playfair Display', serif;
  }
`;
