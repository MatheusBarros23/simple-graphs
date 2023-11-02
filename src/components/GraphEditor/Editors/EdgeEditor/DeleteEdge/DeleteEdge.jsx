import { useEffect } from 'react'
import { useCy } from '../../../../../providers/useCy'
import InstructionBox from '../../../EditorContainer/InstructionBox/InstructionBox';

const DeleteEdge = () => {
    const cy = useCy();

    const deleteEdge = (edgeId) => cy.current.$(`#${edgeId}`).remove();

    const handleTap = (e) => deleteEdge(e.target.id()); 

    useEffect(() => {
        const cyRef = cy.current;

        cyRef.edges().on('tap', handleTap);
        return () => {
            cyRef.edges().off('tap', handleTap);
        }
    }, [cy])

    return (
        <InstructionBox content={"Click on an edge to delete"} />
    )
}

export default DeleteEdge