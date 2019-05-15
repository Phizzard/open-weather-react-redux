import React from "react";

const Card = ({ children, className }) => (
  <div className={`shadow-lg rounded-lg text-center p-3 ${className}`}>
    {children}
  </div>
);

Card.defaultProps = {
  className: ""
};

export default Card;
