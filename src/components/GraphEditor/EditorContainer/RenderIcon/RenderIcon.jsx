import PropTypes from 'prop-types'
import { IconSpan } from '../../../IconSpan/IconSpan'
import { SelectIconContainer } from './styles'

const RenderIcon = ({ mode, onClick}) => {
    const iconRelation = {
        'Add': 'add',
        'Delete': 'delete_forever',
        'Edit': 'edit',
        'Clean': 'restart_alt',
    }

    return (
        <SelectIconContainer>
            <IconSpan
                className='material-symbols-outlined'
                onClick={onClick}
            >
                {iconRelation[mode]}
            </IconSpan>
        </SelectIconContainer>
    )
}

RenderIcon.propTypes = {
    mode: PropTypes.string,
    onClick: PropTypes.func,
}

export default RenderIcon