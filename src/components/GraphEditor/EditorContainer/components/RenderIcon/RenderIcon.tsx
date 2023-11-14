import React, { useEffect, useState } from 'react';

import { IconSpan } from '../IconSpan/IconSpan';
import { SelectIconContainer } from './styles';

type ClickHandler = (() => void) | ((event: React.MouseEvent<HTMLDivElement>) => void);

interface RenderIconProps {
  currentMode: string;
  mode: string;
  onClick?: ClickHandler;
}

const RenderIcon: React.FC<RenderIconProps> = ({ currentMode, mode, onClick }) => {
  const [selected, setSelected] = useState(false);

  const iconRelation: { [key: string]: string } = {
    'Add': 'add',
    'Delete': 'delete_forever',
    'Edit': 'edit',
    'Clean': 'restart_alt',
    'Export': 'file_download',
    'Import': 'file_upload',
    'Help': 'question_mark',
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
  };

  useEffect(() => {
    if (currentMode === mode) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [mode, currentMode]);

  return (
    <SelectIconContainer onClick={handleClick} selected={selected}>
      <IconSpan className='material-symbols-outlined' selected={selected}>
        {iconRelation[mode]}
      </IconSpan>
    </SelectIconContainer>
  );
};

export default RenderIcon;
