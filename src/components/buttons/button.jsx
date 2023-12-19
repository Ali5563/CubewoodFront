import React from "react";
import "./button.css";

const button = ({text}) => {
  return (
    <>
    <button className="button_primary">{text}</button>
    </>
  );
};

export default button;
