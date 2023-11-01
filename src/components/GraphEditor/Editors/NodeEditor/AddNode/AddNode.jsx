import { NodeLabelContext } from "../../../../../providers/NodeLabelProvider"
import { useCy } from "../../../../../providers/useCy"
import { useCallback, useContext, useEffect } from "react"
import InstructionBox from "../../../EditorContainer/InstructionBox/InstructionBox";

const AddNode = () => {
  const cy = useCy();

  const { nodeLabel, setNodeLabel } = useContext(NodeLabelContext);
  
  const addNode = useCallback((e) => {
    const label = nodeLabel + 1
    
    cy.current.add({
      group: "nodes",
      data: { id: label, label: label },
      position: { x: e.renderedPosition.x, y: e.renderedPosition.y },
    })
    setNodeLabel(label)
  },
  [cy, nodeLabel, setNodeLabel]
  )
  
  const handleTap = (event) => addNode(event);
  
  useEffect(() => {
    const cyRef = cy.current
    
    cyRef.on("tap", handleTap)
    
    return () => {
      cyRef.off("tap", handleTap)
    }
  }, [cy, addNode])
  
  return (
      <InstructionBox content={"Click on the canvas to add a node"} />
    )
  }
  
  export default AddNode
  