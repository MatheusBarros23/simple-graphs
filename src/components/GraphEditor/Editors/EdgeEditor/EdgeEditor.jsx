import { AddEdge } from "./AddEdge/AddEdge";
import { IconSpan } from "../../../IconSpan/IconSpan";
import { useEffect, useState } from "react";
import CleanEdges from "./CleanEdges/CleanEdges";
import DeleteEdge from "./DeleteEdge/DeleteEdge";
import EditEdge from "./EditEdge/EditEdge";
import InstructionBox from "../../EditorContainer/InstructionBox/InstructionBox";
import RenderIcon from "../../EditorContainer/RenderIcon/RenderIcon";

const EdgeEditor = () => {
    const modeList = ['Add', 'Delete', 'Clean', 'Edit']

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
            {mode == 'Add' && (<AddEdge />)}
            {mode == 'Edit' && (<EditEdge />)}
            {mode == 'Delete' && (<DeleteEdge />)}
            {mode == 'Clean' && (<CleanEdges />)}
            {mode == '' && <InstructionBox content={"Select a mode"}/>}
        </>
    )
}

export default EdgeEditor