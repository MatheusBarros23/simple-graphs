import { CyProvider } from './providers/CyProvider'
import { NodeLabelProvider } from './providers/NodeLabelProvider'
import GlobalStyles from './GlobalStyles'
import NetworkGraph from './components/NetworkGraph'

function App() {
  return (
    <>
      <GlobalStyles/>
      <NodeLabelProvider>
        <CyProvider>
          <NetworkGraph />
        </CyProvider>
      </NodeLabelProvider>
    </>
  )
}

export default App