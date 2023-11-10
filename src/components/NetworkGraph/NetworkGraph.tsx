import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import EditorContainer from '../GraphEditor/EditorContainer/EditorContainer';
import Footer from '../Footer/Footer';
import { cyInitialStyle } from '../cyInitialStyle';
import { GraphContainer, NetworkContainer } from './styles';
import { useCy } from '../../providers/useCy';

export const NetworkGraph: React.FC = () => {
    const graphContainer = useRef<HTMLDivElement | null>(null); // Specify the type of the ref
    const cy = useCy();

    useEffect(() => {
        if (graphContainer.current && !cy.current) {
            cy.current = cytoscape({
                container: graphContainer.current,
                elements: [],
                style: cyInitialStyle,
                layout: {
                    name: 'grid',
                    rows: 1
                },
            });
        }
    }, [cy]);

    return (
        <div>
            <EditorContainer /> 
            <NetworkContainer>
                <GraphContainer id='graphContainer' ref={graphContainer} />
            </NetworkContainer>
            <Footer />
        </div>
    );
};

export default NetworkGraph;
