import { cyInitialStyle } from '../cyInitialStyle';
import { GraphContainer, NetworkContainer } from './styles';
import { useCy } from '../../providers/useCy';
import { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import EditorContainer from '../GraphEditor/EditorContainer/EditorContainer';

export const NetworkGraph = () => {
    const graphContainer = useRef(null);
    const cy = useCy();

    useEffect(() => {
        if (graphContainer.current && !cy.current) {
            cy.current = cytoscape({
                container: graphContainer.current,
                elements: [],
                style: cyInitialStyle,
                layout: {},
            })
        }
    }, [])

    return (
        <div>
            <EditorContainer graphContainer={graphContainer}/>
            <NetworkContainer>
                <GraphContainer id='graphContainer' ref={graphContainer} />
            </NetworkContainer>
        </div>
    )
}

export default NetworkGraph