import React from "react";

const Button = ({ number, setRate }) => {
  return <button onClick={() => setRate(number)}>{number}</button>;
};

export default Button;
