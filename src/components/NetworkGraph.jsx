import { cyInitialStyle } from './cyInitialStyle';
import { useCy } from '../providers/useCy';
import { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import EditorContainer from './GraphEditor/EditorContainer/EditorContainer';

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
            <div id='graphContainer' ref={graphContainer} style={{ width: '100%', height: '500px', border: '1px solid black' }}></div>
        </div>
    )
}

export default NetworkGraph