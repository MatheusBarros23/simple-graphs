import { useEffect, useState } from 'react';
import AddNode from './AddNode/AddNode';
import CleanNodes from './CleanNodes/CleanNodes';
import DeleteNode from './DeleteNode/DeleteNode';
import EditNode from './EditNode/EditNode';
import InstructionBox from '../../EditorContainer/InstructionBox/InstructionBox';
import RenderIcon from '../../EditorContainer/RenderIcon/RenderIcon';

const NodeEditor = () => {
    const modeList = ['Add', 'Edit', 'Delete', 'Clean']

    const [mode, setMode] = useState('');

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
            {mode == 'Add' && (<AddNode />)}
            {mode == 'Delete' && (<DeleteNode />)}
            {mode == 'Clean' && (<CleanNodes />)}
            {mode == 'Edit' && (<EditNode />)}
            {mode == '' && <InstructionBox content={"Select a mode"}/>}
        </>
    )
}

export default NodeEditor;
