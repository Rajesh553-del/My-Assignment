import React from 'react';

const IconTitle = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2">
      <span>{icon}</span>
      <h2 className="text-xl font-semibold min-w-[max-content]">{title}</h2>
    </div>
  );
};

export default IconTitle;