import PropTypes from 'prop-types'

const AddEdgeModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='modal'>
            <div className='modal-content'>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

AddEdgeModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.any,
}

export default AddEdgeModal