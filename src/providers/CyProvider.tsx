import React, { createContext, useRef, ReactNode } from "react";

export const CyContext = createContext<any | null>(null);

interface CyProviderProps {
    children: ReactNode;
}

const CyProvider: React.FC<CyProviderProps> = ({ children }) => {
    const cy = useRef<any | null>(null);

    return (
        <CyContext.Provider value={cy}>
            {children}
        </CyContext.Provider>
    );
};

export default CyProvider;
