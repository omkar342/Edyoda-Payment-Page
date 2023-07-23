import React from "react";
import CircularButton from "../../Button Components/CircularButton";

const Stages = () => {
  return (
    <div className="stages">
      <CircularButton textDigit={1} buttonTask={"Sign Up"} />
      <CircularButton textDigit={2} buttonTask={"Subscribe"} />
    </div>
  );
};

export default Stages;
