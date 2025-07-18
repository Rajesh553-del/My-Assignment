import React from 'react';
import Button from './Button';

const ButtonGroup = ({ buttons }) => {
  return (
    <div className="flex gap-2 flex-wrap justify-end h-fit">
      {buttons?.map((btn, idx) => (
        <Button key={idx} label={btn.label} onClick={btn.onClick} />
      ))}
    </div>
  );
};

export default ButtonGroup;