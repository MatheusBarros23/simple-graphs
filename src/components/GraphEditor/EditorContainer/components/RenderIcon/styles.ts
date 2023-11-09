import styled, { css } from "styled-components";

interface SelectIconContainerProps {
  selected?: boolean;
}

export const SelectIconContainer = styled.div<SelectIconContainerProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background: var(--fills-tertiary, rgba(0, 0, 0, 0.12));
  transition: all 0.3s;

  ${(props) =>
    props.selected &&
    css`
      background: var(--colors-blue, #007AFF);
    `}
`;
