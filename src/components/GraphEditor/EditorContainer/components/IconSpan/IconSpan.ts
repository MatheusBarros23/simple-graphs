// https://developers.google.com/fonts/docs/material_symbols
import styled, { css } from 'styled-components';

interface IconSpanProps {
  selected?: boolean;
}

export const IconSpan = styled.span<IconSpanProps>`
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
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.selected &&
    css`
      color: var(--colors-blue, white);
    `}
`;
