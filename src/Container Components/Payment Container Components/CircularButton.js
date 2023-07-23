import React from "react";

const CircularButton = (props) => {
  return (
    <div className="circle_component">
      <button class="circle-button">
        <p>{props.textDigit}</p>
      </button>
      <div className="button_task">
        <p>{props.buttonTask}</p>
      </div>
    </div>
  );
};

export default CircularButton;
