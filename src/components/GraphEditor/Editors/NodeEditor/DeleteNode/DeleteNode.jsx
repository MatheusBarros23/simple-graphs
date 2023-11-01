import { useEffect } from 'react';
import { useCy } from '../../../../../providers/useCy';
import InstructionBox from '../../../EditorContainer/InstructionBox/InstructionBox';

const DeleteNode = () => {
    const cy = useCy();

    const removeNode = (id) => cy.current.$(`#${id}`).remove();

    useEffect(() => {
        const handleTap = (event) => removeNode(event.target.id());

        cy.current.nodes().on('tap', handleTap);

        return () => {
            cy.current.nodes().off('tap', handleTap);
        }
    }, []);

    return (
        <InstructionBox content={"Click on a node to delete"} />
    );
};

export default DeleteNode;
