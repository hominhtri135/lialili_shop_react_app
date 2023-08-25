import React from "react";

const IconButton = ({ className, onClick, icon, disabled = false }) => {
  return (
    <button
      className={`rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default IconButton;
