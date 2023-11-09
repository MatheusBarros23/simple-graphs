import React, { useContext } from 'react';
import { NodeLabelContext } from '../../../../../../providers/NodeLabelProvider';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import { MainButton } from '../../../../EditorContainer/components/MainButton/MainButton';

const CleanNodes: React.FC = () => {
    const cy = useCy();
    const { setNodeLabel } = useContext(NodeLabelContext);

    const deleteAllNodes = () => {
        cy.current.nodes().remove();
        setNodeLabel(0);
    }

    return (
        <>
            <InstructionBox
                content={'Are you sure want to delete all nodes? This cannot be undone.'}
                button={
                    <MainButton onClick={deleteAllNodes}>Yes</MainButton>
                }
            />
        </>
    )
}

export default CleanNodes;
