import React from 'react'
import RenderIcon from '../GraphEditor/EditorContainer/components/RenderIcon/RenderIcon'
import GithubLogo from '../../assets/github.png'
import CytoscapeLogo from '../../assets/cytoscape.png'
import { FooterContainer, IconsContainer, IconGroupContainer, LogoContainer } from './styles'

const Footer: React.FC = () => {
    const exportGraph = () => {
        console.log('export');
    }
    
    const importGraph = () => {
        console.log("import");
    }

    return (
        <FooterContainer>
            <IconsContainer>
                <IconGroupContainer>
                    <a href="https://github.com/JVitorCarv/simple-graphs" target="_blank" rel="noopener noreferrer">
                        <LogoContainer src={GithubLogo} />
                    </a>
                    <a href="https://js.cytoscape.org/" target="_blank" rel="noopener noreferrer">
                        <LogoContainer src={CytoscapeLogo} />
                    </a>
                </IconGroupContainer>
                <IconGroupContainer>
                    <RenderIcon currentMode="" mode="Export" onClick={exportGraph}/>
                    <RenderIcon currentMode="" mode="Import" onClick={importGraph}/>
                </IconGroupContainer>
            </IconsContainer>
        </FooterContainer>
    )
}

export default Footer