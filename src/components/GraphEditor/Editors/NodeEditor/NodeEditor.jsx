import { useEffect, useState } from 'react';
import AddNode from './AddNode/AddNode';
import CleanNodes from './CleanNodes/CleanNodes';
import DeleteNode from './DeleteNode/DeleteNode';
import EditNode from './EditNode/EditNode';
import PropTypes from 'prop-types'
import RenderIcon from '../../EditorContainer/RenderIcon/RenderIcon';

const NodeEditor = ({setDisplayArrow}) => {
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
            {mode != '' && (
                <RenderIcon mode='GoBack' onClick={() => setMode('')} />
            )}
            {mode == '' && modeList.map(mode => (
                <RenderIcon key={mode} mode={mode} onClick={() => setMode(mode)}>
                    {mode}
                </RenderIcon>
            ))}
            {mode == 'Add' && (<AddNode />)}
            {mode == 'Delete' && (<DeleteNode />)}
            {mode == 'Clean' && (<CleanNodes />)}
            {mode == 'Edit' && (<EditNode />)}
        </>
    )
}

NodeEditor.propTypes = {
    setDisplayArrow: PropTypes.func,
}

export default NodeEditor;
