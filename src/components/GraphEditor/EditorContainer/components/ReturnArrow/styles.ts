import styled from 'styled-components';
import { IconSpan } from '../IconSpan/IconSpan';

interface ReturnIconProps {
  className?: string;
}

export const ReturnIcon = styled(IconSpan)<ReturnIconProps>`
  font-size: 18px;
`;
