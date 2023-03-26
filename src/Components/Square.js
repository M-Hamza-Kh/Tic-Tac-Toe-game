import React from "react";
import "./Square.css";
const Square = (props) => {
  return (
    <>
      <div className=" div " onClick={props.onClick}>
        {props.statea}
      </div>
    </>
  );
};

export default Square;
