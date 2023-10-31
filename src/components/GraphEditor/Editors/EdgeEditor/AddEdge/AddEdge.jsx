import { useCallback, useEffect, useState } from 'react'
import { useCy } from '../../../../../providers/useCy'
import AddEdgeModal from '../Modals/AddEdgeModal';
import './AddEdge.css'

export const AddEdge = () => {
    const cy = useCy();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setTargetNode('');
        setSourceNode('');
        setIsModalOpen(false)
    };

    const [sourceNode, setSourceNode] = useState('');
    const [targetNode, setTargetNode] = useState('');
    const [directed, setDirected] = useState(false);
    const [weight, setWeight] = useState(0);

    const addEdge = (directed=false) => {
        if (sourceNode.trim() === '' || targetNode.trim() === '') return;
        
        const newEdgeId = Date.now()

        cy.current.add({
            group: 'edges',
            data: { 
                id: `${newEdgeId}`, 
                source: sourceNode, 
                target: targetNode,
                weight: weight,
            },
        })
        
        console.log(directed)
        if (directed) {
            cy.current.$(`#${newEdgeId}`)
                .style('target-arrow-shape', 'triangle')
                .style('target-arrow-color', '#00578a')
        }
        
        setSourceNode('');
        setTargetNode('');
        closeModal();
    }

    const registerNode = useCallback((node) => {
        if (sourceNode === '') {
            setSourceNode(node);
            return;
        }
        setTargetNode(node);
        openModal();
    }, [sourceNode, setTargetNode])

    const handleTap = (e) => registerNode(e.target.id());

    useEffect(() => {
        const cyRef = cy.current;

        cyRef.nodes().on('tap', handleTap);

        return () => {
            cyRef.nodes().off('tap', handleTap);
        }
    })

    return (
        <AddEdgeModal isOpen={isModalOpen} onClose={closeModal}>
            <input
                type='number'
                defaultValue={0}
                onChange={(e) => setWeight(e.target.value)}
            />
            <div>
                <p>Directed</p>
                <label className="switch">
                    <input type="checkbox" checked={directed} onChange={() => setDirected(!directed)} />
                    <span className="slider round"></span>
                </label>
            </div>
            <button onClick={() => addEdge(directed)}>Add </button>
        </AddEdgeModal>
    )
}
