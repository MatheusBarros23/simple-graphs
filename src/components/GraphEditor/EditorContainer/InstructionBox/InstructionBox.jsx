import PropTypes from 'prop-types'
import { DescriptionContainer, InstructionBoxContainer } from './styles'

const InstructionBox = ({ button, content }) => {
  return (
    <InstructionBoxContainer>
      <DescriptionContainer>
        {content}
      </DescriptionContainer>
      {button}
    </InstructionBoxContainer>
  )
}

InstructionBox.propTypes = {
    content: PropTypes.any,
    button: PropTypes.element,
}

export default InstructionBox