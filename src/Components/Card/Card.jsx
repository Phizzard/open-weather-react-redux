import React from "react";

const Card = ({ children, className }) => (
  <div
    className={`bg-blue-600 text-white shadow-xl rounded-lg text-center p-6 ${className}`}
  >
    {children}
  </div>
);

Card.defaultProps = {
  className: ""
};

export default Card;
