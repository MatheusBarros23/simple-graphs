import { useEffect, useState } from 'react';
import AddNode from './AddNode/AddNode';
import CleanNodes from './CleanNodes/CleanNodes';
import DeleteNode from './DeleteNode/DeleteNode';
import EditNode from './EditNode/EditNode';
import InstructionBox from '../../EditorContainer/InstructionBox/InstructionBox';
import PropTypes from 'prop-types'
import RenderIcon from '../../EditorContainer/RenderIcon/RenderIcon';
import ReturnArrow from '../../EditorContainer/ReturnArrow/ReturnArrow';

const NodeEditor = ({ setDisplayArrow }) => {
    const modeList = ['Add', 'Edit', 'Delete', 'Clean']

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
            {mode != '' && (<ReturnArrow onClick={() => setMode('')} />)}
            {modeList.map(mode => (
                <RenderIcon key={mode} mode={mode} onClick={() => setMode(mode)}>
                    {mode}
                </RenderIcon>
            ))}
            {mode == 'Add' && (<AddNode />)}
            {mode == 'Delete' && (<DeleteNode />)}
            {mode == 'Clean' && (<CleanNodes />)}
            {mode == 'Edit' && (<EditNode />)}
            {mode == '' && <InstructionBox content={"Select a mode"}/>}
        </>
    )
}

NodeEditor.propTypes = {
    setDisplayArrow: PropTypes.func,
}

export default NodeEditor;
