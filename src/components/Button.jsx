import React from "react";

function Button({ children, ...others }) {
  return (
    <button {...others} className="p-4 bg-primary-300 border-2 border-card-100 rounded-xl transition-all active:scale-95 text-card-100 font-semibold hover:bg-primary-200">
      {children}
    </button>
  );
}

export default Button;
