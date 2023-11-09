import React from 'react';

import { ReturnIcon } from './styles';

interface ReturnArrowProps {
  onClick: () => void;
}

const ReturnArrow: React.FC<ReturnArrowProps> = ({ onClick }) => {
  return (
    <ReturnIcon className='material-symbols-outlined' onClick={onClick}>
      arrow_back_ios
    </ReturnIcon>
  );
};

export default ReturnArrow;
