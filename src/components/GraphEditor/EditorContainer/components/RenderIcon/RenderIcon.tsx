import React, { useEffect, useState } from 'react';

import { IconSpan } from '../IconSpan/IconSpan';
import { SelectIconContainer } from './styles';

interface RenderIconProps {
  currentMode: string;
  mode: string;
  onClick: (() => void) | ((event: React.ChangeEvent<HTMLInputElement>) => void);
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
    if (typeof onClick === 'function') {
      if (onClick.length === 0) {
        // Se a função não espera argumentos, chame-a diretamente
        (onClick as () => void)();
      } else {
        // Se a função espera um argumento, crie um objeto de evento falso
        const fakeEvent = {
          target: event.target as HTMLInputElement,
          currentTarget: event.currentTarget as HTMLInputElement,
        };
        (onClick as (event: React.ChangeEvent<HTMLInputElement>) => void)(fakeEvent as any);
      }
    }
  }

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
