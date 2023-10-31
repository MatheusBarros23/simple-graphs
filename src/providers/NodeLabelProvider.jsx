import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const NodeLabelContext = createContext();

export const NodeLabelProvider = ({ children }) => {
    
    const [nodeLabel, setNodeLabel] = useState(0);
    
    return (
        <NodeLabelContext.Provider value={{ nodeLabel, setNodeLabel }}>
            {children}
        </NodeLabelContext.Provider>
    )
}

NodeLabelProvider.propTypes = {
    children: PropTypes.any,
}