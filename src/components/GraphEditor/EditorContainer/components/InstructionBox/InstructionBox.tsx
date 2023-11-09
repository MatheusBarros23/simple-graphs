import React, { ReactElement } from 'react';
import { DescriptionContainer, InstructionBoxContainer } from './styles';

interface InstructionBoxProps {
  content?: any;
  button?: ReactElement;
}

const InstructionBox: React.FC<InstructionBoxProps> = ({ button, content }) => {
  return (
    <InstructionBoxContainer>
      <DescriptionContainer>
        {content}
      </DescriptionContainer>
      {button}
    </InstructionBoxContainer>
  );
};

export default InstructionBox;
