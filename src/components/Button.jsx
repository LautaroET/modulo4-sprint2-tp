import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="mt-2 bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
