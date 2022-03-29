import styled from 'styled-components';

export const Container = styled.div`
padding: 1rem;
border: 1px solid #a3a3a3;
background: #7a7a7a;
border-radius: 5px;
width: 30%;
margin-bottom: 10rem;

  h4 {
    background-color: var(--colorDefault);
    color: var(--colorFont);
    padding: 0.4em;
    margin-bottom: 0.5em;
    font-size: 1.3em;
  }

  p {
    color: var(--colorFont);
    margin-bottom:1em;
  }

  p span {
    font-weight: bold;
  }
`;