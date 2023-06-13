import { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1366px){
    html {
      font-size: 76.75%;
    }
  }
  @media(max-width: 1080px){
    html {
      font-size: 75.75%;
    }
  }
  @media(max-width: 720px){
    html {
      font-size: 74%;
    }
  }

  :focus{
    outline: 0;
  }

  body, input-security, select, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  button, a {
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

`;
