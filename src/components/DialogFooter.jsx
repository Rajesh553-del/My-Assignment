import React from 'react';
import ButtonGroup from './ButtonGroup';

const DialogFooter = ({ buttons, info }) => {
  return (
    <div className="border-t pt-2 mt-2 flex justify-between gap-4">
      {info && <p className="text-sm text-gray-500 mb-2 min-w-[120px]">{info}</p>}
      <ButtonGroup buttons={buttons} />
    </div>
  );
};

export default DialogFooter;