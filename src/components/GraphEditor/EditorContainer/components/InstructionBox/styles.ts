import styled from "styled-components";

export const InstructionBoxContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100%;
    justify-content: center;

    & button {
        padding: 13px 20px;
    }
`

export const DescriptionContainer = styled.div`
    color: #3f3f3f;
    padding: 14px 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 12px;
    background: var(--fills-tertiary, rgba(0, 0, 0, 0.12));;

    & input {
        font-size: inherit;
        color: inherit;
        background: transparent;
        border: none;
        width: 128px;
        resize: none;

        &:focus{
            outline: none;
        }
    }
`