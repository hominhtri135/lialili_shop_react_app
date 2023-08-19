import React from "react";

const Button = ({ onClick, className, type = "button", children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-auto rounded-full bg-black text-white border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
