import styled, { css } from 'styled-components'

// https://developers.google.com/fonts/docs/material_symbols
export const IconSpan = styled.span`
    color: var(--colors-blue, #007AFF);
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    &:hover{
        cursor: pointer;
    }
    ${props => 
        props.isSelected && css`
            color: var(--colors-blue, white);
        `
    }
`