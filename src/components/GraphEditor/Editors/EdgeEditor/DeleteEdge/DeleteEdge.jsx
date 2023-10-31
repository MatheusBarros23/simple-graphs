import { useEffect } from 'react'
import { useCy } from '../../../../../providers/useCy'

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
        <h1>Click on a edge to delete it</h1>
    )
}

export default DeleteEdge