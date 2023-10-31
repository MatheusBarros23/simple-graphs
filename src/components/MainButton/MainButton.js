import styled from 'styled-components';

export const MainButton = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    background-color: white;
    color: black;
    border: 2px solid black;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        background-color: #4287f5;
        color: white;
        transition: 0.2s;
        border-color: #003478;
    }
`;