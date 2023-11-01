import { ReturnIcon } from './styles';
import PropTypes from 'prop-types';

const ReturnArrow = ({ onClick }) => {
    return (
        <ReturnIcon
            className='material-symbols-outlined'
            onClick={onClick}
        >
            arrow_back_ios
        </ReturnIcon>
    )
}

ReturnArrow.propTypes = {
    onClick: PropTypes.func,
}

export default ReturnArrow