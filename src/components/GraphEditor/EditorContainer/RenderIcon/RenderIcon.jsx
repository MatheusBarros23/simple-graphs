import PropTypes from 'prop-types'
import { IconSpan } from '../../../IconSpan/IconSpan'

const RenderIcon = ({ mode, onClick}) => {
    const iconRelation = {
        'Add': 'add',
        'Delete': 'delete_forever',
        'Edit': 'edit',
        'Clean': 'restart_alt',
        'GoBack': 'arrow_back_ios',
    }

    return (
        <IconSpan
            className='material-symbols-outlined'
            onClick={onClick}
        >
            {iconRelation[mode]}
        </IconSpan>
    )
}

RenderIcon.propTypes = {
    mode: PropTypes.string,
    onClick: PropTypes.func,
}

export default RenderIcon