import styled from 'styled-components';

export const ButtonSubmitFormStyles = styled.button`
  width: 355px;
  height: 40px;
  margin-top: 1em;
  border: none;
  border-radius: 5px;
  padding: 0.6em 1.2em;
  cursor: pointer;
  transition: 0.7s;
  color: var(--colorDark);
  background-color: var(--colorLight);

  &:hover{
    color: var(--colorLight);
    background-color: var(--colorDark);
  }
`;