import { useCy } from '../../../../../providers/useCy'

const CleanEdges = () => {
    const cy = useCy();

    const deleteAllEdges = () => cy.current.edges().remove();

    return (
      <>
        <h1>Are you sure you want to delete all edges? This can not be undone.</h1>
        <button onClick={deleteAllEdges}>yas lul</button>
      </>
    )
}

export default CleanEdges