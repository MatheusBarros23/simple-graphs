import React, { createContext, useState, ReactNode } from 'react';

interface NodeLabelContextType {
    nodeLabel: number;
    setNodeLabel: React.Dispatch<React.SetStateAction<number>>;
}

export const NodeLabelContext = createContext<NodeLabelContextType>({
    nodeLabel: 0,
    setNodeLabel: () => {},
});

interface NodeLabelProviderProps {
    children: ReactNode;
}

export const NodeLabelProvider: React.FC<NodeLabelProviderProps> = ({ children }) => {
    const [nodeLabel, setNodeLabel] = useState<number>(0);

    return (
        <NodeLabelContext.Provider value={{ nodeLabel, setNodeLabel }}>
            {children}
        </NodeLabelContext.Provider>
    );
};
