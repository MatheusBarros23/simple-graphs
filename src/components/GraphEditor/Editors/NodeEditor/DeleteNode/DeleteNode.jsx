import { useEffect } from 'react';
import { useCy } from '../../../../../providers/useCy';

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
        <h1>Click on a node to delete</h1>
    );
};

export default DeleteNode;
