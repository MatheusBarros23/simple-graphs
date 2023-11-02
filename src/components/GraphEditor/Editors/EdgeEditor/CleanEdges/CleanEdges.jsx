import { useCy } from '../../../../../providers/useCy'
import { MainButton } from '../../../../MainButton/MainButton';
import InstructionBox from '../../../EditorContainer/InstructionBox/InstructionBox';

const CleanEdges = () => {
    const cy = useCy();

    const deleteAllEdges = () => cy.current.edges().remove();

    return (
      <InstructionBox 
        content={"Are you sure you want to delete all edges? This can not be undone."}
        button={
          <MainButton onClick={deleteAllEdges}>Yes</MainButton>
        }
      />
    )
}

export default CleanEdges