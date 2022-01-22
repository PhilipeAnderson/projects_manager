import styled from 'styled-components';

export const ButtonStyles = styled.button`
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 1em 1.3em;
    text-decoration: none;
    cursor: pointer;
    transition: 0.7s;
    background-color: var(--colorLight);

    &:hover{
        background-color: var(--colorDark);
    }

    a {
        text-decoration: none;
        color: var(--colorDark);
        padding: 10px;

        &:hover {
            color: var(--colorLight);
        }
    }
`;