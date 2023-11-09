import { useCy } from '../../../../../../providers/useCy';
import { MainButton } from '../../../../EditorContainer/components/MainButton/MainButton';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import React from 'react';

const CleanEdges: React.FC = () => {
    const cy = useCy();

    const deleteAllEdges = () => cy.current.edges().remove();

    return (
        <InstructionBox
            content={"Are you sure you want to delete all edges? This cannot be undone."}
            button={
                <MainButton onClick={deleteAllEdges}>Yes</MainButton>
            }
        />
    );
};

export default CleanEdges;
