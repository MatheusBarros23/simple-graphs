import React, { useState } from 'react';
import AddEdge from './components/AddEdge/AddEdge';
import CleanEdges from './components/CleanEdges/CleanEdges';
import DeleteEdge from './components/DeleteEdge/DeleteEdge';
import EditEdge from './components/EditEdge/EditEdge';
import InstructionBox from '../../EditorContainer/components/InstructionBox/InstructionBox';
import RenderIcon from '../../EditorContainer/components/RenderIcon/RenderIcon';

const EdgeEditor: React.FC = () => {
    const modeList: string[] = ['Add', 'Delete', 'Clean', 'Edit'];

    const [mode, setMode] = useState<string>('');

    return (
        <>  
            {modeList.map(selectableMode => (
                <RenderIcon 
                    key={selectableMode} 
                    mode={selectableMode} 
                    currentMode={mode}
                    onClick={() => setMode(selectableMode)}
                />
            ))}
            {mode === 'Add' && <AddEdge />}
            {mode === 'Edit' && <EditEdge />}
            {mode === 'Delete' && <DeleteEdge />}
            {mode === 'Clean' && <CleanEdges />}
            {mode === '' && <InstructionBox content={"Select a mode"} />}
        </>
    );
};

export default EdgeEditor;
