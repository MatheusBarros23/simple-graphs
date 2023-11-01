import { NodeLabelContext } from '../../../../../providers/NodeLabelProvider';
import { useContext } from 'react';
import { useCy } from '../../../../../providers/useCy'
import InstructionBox from '../../../EditorContainer/InstructionBox/InstructionBox';
import { MainButton } from '../../../../MainButton/MainButton';


const CleanNodes = () => {
    const cy = useCy();
    const { setNodeLabel } = useContext(NodeLabelContext);

    const deleteAllNodes = () => {
        cy.current.nodes().remove();
        setNodeLabel(0);
    }

    return (
        <>
            <InstructionBox
                content={'Are you sure want to delete all nodes? This can not be undone.'}
                button={
                    <MainButton onClick={deleteAllNodes}>Yes</MainButton>
                }
            />
        </>
    )
}

export default CleanNodes