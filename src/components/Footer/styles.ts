import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const IconsContainer = styled.div`
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

export const IconGroupContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const LogoContainer = styled.img`
    height: 50px;
    width: 50px;
    object-fit: contain;
    fill: var(--colors-blue, #007AFF)
`