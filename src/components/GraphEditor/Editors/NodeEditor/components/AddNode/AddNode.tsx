import React, { useCallback, useContext, useEffect } from 'react';
import { NodeLabelContext } from '../../../../../../providers/NodeLabelProvider';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';

const AddNode: React.FC = () => {
    const cy = useCy();
    const { nodeLabel, setNodeLabel } = useContext(NodeLabelContext);

    const addNode = useCallback((e: any) => {
        if (nodeLabel !== undefined) { 
            const label = nodeLabel + 1;

            cy.current.add({
                group: 'nodes',
                data: { id: label, label: label },
                position: { x: e.renderedPosition.x, y: e.renderedPosition.y },
            });
            setNodeLabel(label);
        }
    }, [cy, nodeLabel, setNodeLabel]);

    const handleTap = (event: any) => addNode(event);

    useEffect(() => {
        const cyRef = cy.current;

        cyRef.on('tap', handleTap);

        return () => {
            cyRef.off('tap', handleTap);
        };
    }, [cy, addNode]);

    return <InstructionBox content="Click on the canvas to add a node" />;
};

export default AddNode;
