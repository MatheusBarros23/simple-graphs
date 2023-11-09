import { useEffect } from 'react';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import React from 'react';

const DeleteEdge: React.FC = () => {
    const cy = useCy();

    const deleteEdge = (edgeId: string) => cy.current.$(`#${edgeId}`).remove();

    const handleTap = (e: any) => deleteEdge(e.target.id());

    useEffect(() => {
        const cyRef = cy.current;

        cyRef.edges().on('tap', handleTap);
        return () => {
            cyRef.edges().off('tap', handleTap);
        };
    }, [cy]);

    return (
        <InstructionBox content={"Click on an edge to delete"} />
    );
};

export default DeleteEdge;
