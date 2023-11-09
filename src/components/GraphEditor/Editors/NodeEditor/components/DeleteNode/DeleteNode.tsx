import React, { useEffect } from 'react';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';

const DeleteNode: React.FC = () => {
    const cy = useCy();

    const removeNode = (id: string) => cy.current.$(`#${id}`).remove();

    useEffect(() => {
        const handleTap = (event: any) => removeNode(event.target.id());

        cy.current.nodes().on('tap', handleTap);

        return () => {
            cy.current.nodes().off('tap', handleTap);
        }
    }, [cy]);

    return (
        <InstructionBox content={"Click on a node to delete"} />
    );
};

export default DeleteNode;
