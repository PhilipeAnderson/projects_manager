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


  /* Modal Global Styling */
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
	
  /* Modal Global Styling */
  .content {
    width: 100%;
    max-width: 300px;
    background: var(--colorDark);
    padding: 3rem;
    position: relative;
    border: none;
    border-radius: 1rem;

    div {
      position: absolute;
      top: 20px;
      right: 20px;
      color: #fff;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;