import styled from 'styled-components';


export const InputStyles = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label{
    margin-bottom: .6em;
    font-weight: bold;
  }

  input{
    padding: .7em;
    border: none;
    border-radius: .5em;

    &::placeholder{
      color: var(--colorLight)
    }
  }
`;