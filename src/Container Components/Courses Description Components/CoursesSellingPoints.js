import React from "react";

const backgroundColor = {
  background: "linear-gradient(122deg, #0096FF 42.14%, #0048FF 96.70%)",
  "background-clip": "text",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

const CoursesSellingPoints = (props) => {
  return (
    <div className="courses_selling_points">
      {props.icon}

      {props.first === true ? (
        <p>
          <span style={backgroundColor}>{props.quantitativeWord}</span> {"  "}
          {props.description}
        </p>
      ) : (
        <p>
          {props.description}
          {"  "}
          <span style={backgroundColor} s>
            {props.quantitativeWord}
          </span>
        </p>
      )}
    </div>
  );
};

export default CoursesSellingPoints;
