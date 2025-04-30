import React from "react";

const Button = ({ className, children , onClick}) => {
  console.log("Button rendered");
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  };


export default Button;
