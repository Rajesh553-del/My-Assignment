import React from 'react';

const DialogContent = ({ children }) => {
  return <div className="min-h-[20vh] max-h-[50vh] overflow-auto py-4">
      {children}
    </div>;
};

export default DialogContent;