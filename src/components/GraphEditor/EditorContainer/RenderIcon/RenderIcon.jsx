import { IconSpan } from '../../../IconSpan/IconSpan'
import { SelectIconContainer } from './styles'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const RenderIcon = ({ currentMode, mode, onClick}) => {
    const [isSelected, setIsSelected] = useState(false);

    const iconRelation = {
        'Add': 'add',
        'Delete': 'delete_forever',
        'Edit': 'edit',
        'Clean': 'restart_alt',
    }

    useEffect(() => {
        if (currentMode === mode) {
            console.log(currentMode);
            setIsSelected(true);
            return;
        }
        setIsSelected(false);
    }, [mode, currentMode])

    return (
        <SelectIconContainer isSelected={isSelected}>
            <IconSpan
                className='material-symbols-outlined'
                isSelected={isSelected}
                onClick={onClick}
            >
                {iconRelation[mode]}
            </IconSpan>
        </SelectIconContainer>
    )
}

RenderIcon.propTypes = {
    currentMode: PropTypes.string,
    mode: PropTypes.string,
    onClick: PropTypes.func,
}

export default RenderIcon