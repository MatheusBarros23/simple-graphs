import React, { useEffect, useState } from 'react';
import { Container, SelectedModeContainer, Navbar, Title } from './styles';
import { MainButton } from './components/MainButton/MainButton';
import EdgeEditor from '../Editors/EdgeEditor/EdgeEditor';
import NodeEditor from '../Editors/NodeEditor/NodeEditor';
import ReturnArrow from './components/ReturnArrow/ReturnArrow';


const EditorContainer: React.FC = () => {
  const [mode, setMode] = useState<string>('');
  const [displayArrow, setDisplayArrow] = useState<boolean>(false);

  useEffect(() => {
    if (mode !== '') {
      setDisplayArrow(true);
    } else {
      setDisplayArrow(false);
    }
  }, [mode]);

  return (
    <Container>
      <Title>Simple Graphs</Title>
      <Navbar>
        {mode === '' && (
          <MainButton onClick={() => setMode('node')}>Node</MainButton>
        )}
        {mode === '' && (
          <MainButton onClick={() => setMode('edge')}>Edge</MainButton>
        )}
        <SelectedModeContainer>
          {displayArrow && <ReturnArrow onClick={() => setMode('')} />}
          {mode === 'node' && <NodeEditor />}
          {mode === 'edge' && <EdgeEditor />}
        </SelectedModeContainer>
      </Navbar>
    </Container>
  );
};

export default EditorContainer;