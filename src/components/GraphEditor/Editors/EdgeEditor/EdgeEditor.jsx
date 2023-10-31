import { AddEdge } from "./AddEdge/AddEdge";
import { IconSpan } from "../../../IconSpan/IconSpan";
import { useEffect, useState } from "react";
import CleanEdges from "./CleanEdges/CleanEdges";
import DeleteEdge from "./DeleteEdge/DeleteEdge";
import EditEdge from "./EditEdge/EditEdge";
import PropTypes from 'prop-types'

const EdgeEditor = ({ setDisplayArrow }) => {
    const modeList = ['Add', 'Delete', 'Clean', 'Edit']

    const [mode, setMode] = useState('');

    useEffect(() => {
        if (mode != '') {
            setDisplayArrow(false);
            return;
        }
        setDisplayArrow(true);
        
        return () => {
            setDisplayArrow(true);
        }
    }, [mode])
    
    return (
        <>  
            {mode != '' && (
                <IconSpan 
                    className="material-symbols-outlined" 
                    onClick={() => setMode('')}
                >
                    arrow_back_ios
                </IconSpan>
            )}
            {modeList.map(mode => (
                <button key={mode} onClick={() => setMode(mode)}>
                    {mode}
                </button>
            ))}
            {mode == 'Add' && (<AddEdge />)}
            {mode == 'Edit' && (<EditEdge />)}
            {mode == 'Delete' && (<DeleteEdge />)}
            {mode == 'Clean' && (<CleanEdges />)}
        </>
    )
}

EdgeEditor.propTypes = {
    setDisplayArrow: PropTypes.func
}

export default EdgeEditor