import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #0000ff;
    --secondary: #5efc8d;
    --light-gray: #cccccc;
  }
  
  body {
    font-family: Helvetica, SansSerif, sans-serif;
  }

  h3 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;