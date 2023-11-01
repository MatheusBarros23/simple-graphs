import styled, { css } from "styled-components";

export const SelectIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height: 50px;
    width: 50px;
    background: var(--fills-tertiary, rgba(0, 0, 0, 0.12));
    ${props => 
        props.isSelected && css`
            background: var(--colors-blue, #007AFF);
        `
    }
`