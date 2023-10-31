import { useCy } from '../../../../../providers/useCy'
import { useEffect, useState } from 'react'

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
            {enableEdit && (
                <>
                <p>Editing: {cy.current.$(`#${selectedNode}`).data('label')}</p>
                <input
                    type="text"
                    onChange={(e) => setNewNodeLabel(e.target.value)}
                    placeholder='New label' 
                />
                <button onClick={addNewLabel}>Change</button>
                </>
            )}
        </>
    )
}

export default EditNode