import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <div>
      <button className="button-outline" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
