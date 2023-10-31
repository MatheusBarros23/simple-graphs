import { createContext, useRef } from "react";
import PropTypes from 'prop-types'

export const CyContext = createContext();

export const CyProvider = ({ children }) => {
    const cy = useRef(null);
    
    return (
        <CyContext.Provider value={cy}>
            {children}
        </CyContext.Provider>
    )
}

CyProvider.propTypes = {
    children: PropTypes.any,
}