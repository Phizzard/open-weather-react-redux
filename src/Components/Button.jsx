import React from "react";

const Button = ({ children, className, ...attrs }) => (
  <button
    style={{ transition: ".1s ease-in" }}
    className={`text-white shadow-xl rounded-lg text-center p-4 cursor-pointer ${className}`}
    {...attrs}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: ""
};

export default Button;
