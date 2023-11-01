import { MainButton } from '../../../../MainButton/MainButton';
import { useCy } from '../../../../../providers/useCy'
import { useEffect, useState } from 'react'
import InstructionBox from '../../../EditorContainer/InstructionBox/InstructionBox';

const EditNode = () => {
    const cy = useCy();

    const [enableEdit, setEnableEdit] = useState(false);
    const [selectedNode, setSelectedNode] = useState('');
    const [newNodeLabel, setNewNodeLabel] = useState('');

    const addNewLabel = () => {
        if (newNodeLabel.trim() === '') return;
        cy.current.$(`#${selectedNode}`).data('label', newNodeLabel)
        setSelectedNode('');
        setNewNodeLabel('');
        setEnableEdit(false);
    }

    const handleClick = (e) => {
        setEnableEdit(true);
        setSelectedNode(e.target.id())
    }

    useEffect(() => {
        const cyRef = cy.current;

        cyRef.nodes().on('tap', handleClick);
        return () => {
            cyRef.nodes().off('tap', handleClick);
        }
    }, [cy])

    return (
        <>
            {!enableEdit && (<InstructionBox content={"Click on the node you wish to edit"} />)}
            {enableEdit && (
                <InstructionBox 
                    content={
                        <input
                            type="text"
                            onChange={(e) => setNewNodeLabel(e.target.value)}
                            placeholder={`Insert new label...`}
                        />
                    }
                    button={
                        <MainButton onClick={addNewLabel}>Change</MainButton>
                    }
                />
            )}
        </>
    )
}

export default EditNode