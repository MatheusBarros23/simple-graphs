import { NodeLabelContext } from '../../../../../providers/NodeLabelProvider';
import { useContext } from 'react';
import { useCy } from '../../../../../providers/useCy'


const CleanNodes = () => {
    const cy = useCy();
    const { setNodeLabel } = useContext(NodeLabelContext);

    const deleteAllNodes = () => {
        cy.current.nodes().remove();
        setNodeLabel(0);
    }

    return (
        <>
            <h1>Are you sure you want to delete all nodes? This can not be undone.</h1>
            <button onClick={deleteAllNodes}>yas lul</button>
        </>
    )
}

export default CleanNodes