import { Container, Navbar } from "./styles";
import { IconSpan } from "../../IconSpan/IconSpan";
import { MainButton } from "../../MainButton/MainButton";
import { useEffect, useState } from "react";
import EdgeEditor from "../Editors/EdgeEditor/EdgeEditor";
import NodeEditor from '../Editors/NodeEditor/NodeEditor'

const EditorContainer = () => {
    const [mode, setMode] = useState('');
    const [displayArrow, setDisplayArrow] = useState(false);

    useEffect(() => {
        if (mode != '') {
            setDisplayArrow(true);
            return;
        }
        setDisplayArrow(false);
    }, [mode])
    
    return (
        <Container>
            <h1>Simple Graphs</h1>
            <Navbar>
                {mode == '' && (<MainButton onClick={() => setMode('node')}>Node</MainButton>)}
                {mode == '' && (<MainButton onClick={() => setMode('edge')}>Edge</MainButton>)}
                {displayArrow && (
                    <IconSpan 
                        className="material-symbols-outlined" 
                        onClick={() => setMode('')}
                    >
                        arrow_back_ios
                    </IconSpan>
                )}
                {mode == 'node' && (<NodeEditor setDisplayArrow={setDisplayArrow}/>)}
                {mode == 'edge' && (<EdgeEditor setDisplayArrow={setDisplayArrow} />)}
            </Navbar>
        </Container>
    )
}

export default EditorContainer