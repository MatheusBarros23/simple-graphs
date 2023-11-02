import { useCallback, useEffect, useState } from 'react'
import { useCy } from '../../../../../providers/useCy'
import AddEdgeModal from '../Modals/AddEdgeModal';
import InstructionBox from '../../../EditorContainer/InstructionBox/InstructionBox';
import { MainButton } from '../../../../MainButton/MainButton';
import { CheckboxInput, SelectDirectionContainer, Slider, SliderBefore, StyledSwitch } from './styles';

export const AddEdge = () => {
    const cy = useCy();

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
        
        if (directed) {
            cy.current.$(`#${newEdgeId}`)
                .style('target-arrow-shape', 'triangle')
                .style('target-arrow-color', '#00578a')
        }
        
        setSourceNode('');
        setTargetNode('');
    }

    const registerNode = useCallback((node) => {
        if (sourceNode === '') {
            setSourceNode(node);
            return;
        }
        setTargetNode(node);
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
        <>
        {sourceNode == '' && (<InstructionBox content={"Click on the source edge"} />)}
        {sourceNode != '' && targetNode == '' && (<InstructionBox content={"Click on the target edge"} />)}
        {sourceNode != '' && targetNode != '' && 
            (
                <InstructionBox
                    content={
                        <input
                            type="text"
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder={`Insert weight...`}
                        />
                    }
                    button={
                        <>
                            <SelectDirectionContainer>
                                <p>Directed</p>
                                <StyledSwitch  className={directed ? "round" : ""}>
                                    <CheckboxInput 
                                        type="checkbox" 
                                        checked={directed} 
                                        onChange={() => setDirected(!directed)} 
                                    />
                                    <Slider className="slider" />
                                    <SliderBefore className="slider-before" />
                                </StyledSwitch>
                            </SelectDirectionContainer>
                            <MainButton onClick={() => addEdge(directed)}>Add</MainButton>
                        </>
                    }
                />
            )
        }
        </>
    )
}
