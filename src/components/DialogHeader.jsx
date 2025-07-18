import React from 'react';
import IconTitle from './IconTitle';
import ButtonGroup from './ButtonGroup';

const DialogHeader = ({ icon, title, buttons }) => {
  return (
    <div className="flex justify-between items-center border-b pb-2 mb-2 gap-4">
      <IconTitle icon={icon} title={title} />
      <ButtonGroup buttons={buttons} />
    </div>
  );
};

export default DialogHeader;