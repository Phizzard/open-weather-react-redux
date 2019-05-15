import React from "react";

const Button = ({ children, className }) => (
  <button className={`shadow-lg rounded-lg text-center py-2 px-8 ${className}`}>
    {children}
  </button>
);

Button.defaultProps = {
  className: ""
};

export default Button;
