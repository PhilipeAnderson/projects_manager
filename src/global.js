import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  :root{
    --colorDefault: #0099bb;
    --colorLight: #a7d9e4;
    --colorDark: #005c70;

    --colorFont: #fff;

    --backgroundElements: #bdc4c5;

    --background: #e1e8eb;
    --backgroundSuccess: #87e66a;
    --backgroundError: #eb7777;

    --backgroundImage: url('./assets/img/logo.png');
  }

  html, body, #root{
    width: 100%;
    height: 100%;
    background-color: var(--background);
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }
`;