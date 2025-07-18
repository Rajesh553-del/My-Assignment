import React from 'react';

const Dialog = ({ header, content, footer }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded shadow-lg md:max-w-[60vw] sm:max-w-full max-sm:max-w-full md:w-[50vw] p-4 m-4">
        {header}
        {content}
        {footer}
      </div>
    </div>
  );
};

export default Dialog;