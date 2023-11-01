import { Container, SelectedModeContainer, Navbar, Title } from "./styles";
import { MainButton } from "../../MainButton/MainButton";
import { useEffect, useState } from "react";
import EdgeEditor from "../Editors/EdgeEditor/EdgeEditor";
import NodeEditor from '../Editors/NodeEditor/NodeEditor'
import ReturnArrow from "./ReturnArrow/ReturnArrow";

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
            <Title>Simple Graphs</Title>
            <Navbar>
                {mode == '' && (<MainButton onClick={() => setMode('node')}>Node</MainButton>)}
                {mode == '' && (<MainButton onClick={() => setMode('edge')}>Edge</MainButton>)}
                <SelectedModeContainer>
                    {displayArrow && (<ReturnArrow onClick={() => setMode('')} />)}
                    {mode == 'node' && (<NodeEditor setDisplayArrow={setDisplayArrow}/>)}
                    {mode == 'edge' && (<EdgeEditor setDisplayArrow={setDisplayArrow} />)}
                </SelectedModeContainer>
            </Navbar>
        </Container>
    )
}

export default EditorContainer