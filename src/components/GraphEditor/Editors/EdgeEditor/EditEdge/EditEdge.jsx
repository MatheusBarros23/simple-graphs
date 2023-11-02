import { useCy } from '../../../../../providers/useCy'
import { useEffect, useState } from 'react'
import InstructionBox from '../../../EditorContainer/InstructionBox/InstructionBox';
import { MainButton } from '../../../../MainButton/MainButton';

const EditEdge = () => {
    const cy = useCy();

    const [selectedEdge, setSelectedEdge] = useState('');
    const [enableEdit, setEnableEdit] = useState(false);
    const [newWeight, setNewWeight] = useState(0);

    const editEdge = () => {
        const weight = parseFloat(newWeight);
        if (!Number.isNaN(weight) && weight >= 0) {
            cy.current.$(`#${selectedEdge}`).data('weight', weight);
        }
        setEnableEdit(false)
        setSelectedEdge('')
        setNewWeight(0);
    }

    const handleTap = (e) => {
        setEnableEdit(true)
        setSelectedEdge(e.target.id())
    };

    useEffect(() => {
        const cyRef = cy.current;

        cyRef.edges().on('tap', handleTap)

        return () => {
            cyRef.edges().on('tap', handleTap)
        }
    }, [cy])

    return (
        <>
            {!enableEdit && (<InstructionBox content={"Click on the edge you wish to edit"} />)}
            {enableEdit && (
                <InstructionBox 
                    content={
                        <input
                            type="text"
                            onChange={(e) => setNewWeight(e.target.value)}
                            placeholder={`Insert new label...`}
                        />
                    }
                    button={
                        <MainButton onClick={editEdge}>Change</MainButton>
                    }
                />
            )}
        </>
    )
}

export default EditEdge