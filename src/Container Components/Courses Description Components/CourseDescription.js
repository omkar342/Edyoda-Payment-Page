import React from "react";
import "./CourseDescription.css";
import CoursesSellingPoints from "./CoursesSellingPoints";
import {
  BookIcon,
  TVIcon,
  ClockIcon,
  EducationIcon,
  ADSIcon,
} from "../../Icons/Icons";

const backgroundColor = {
  background: "linear-gradient(122deg, #0096FF 42.14%, #0048FF 96.70%)",
  "background-clip": "text",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

const CourseDescription = () => {
  return (
    <div className="course_description">
      <h2>Access curated courses worth</h2>
      <h2>
        <span className="strikethrough_text">₹ 18,500</span> at just{" "}
        <span style={backgroundColor}>₹ 99</span> per year!
      </h2>
      <CoursesSellingPoints
        icon={<BookIcon />}
        quantitativeWord={"100+"}
        description={"Job relevant courses"}
        first={true}
      />
      <CoursesSellingPoints
        icon={<ClockIcon />}
        quantitativeWord={"20,000+"}
        description={"Hours of content"}
        first={true}
      />
      <CoursesSellingPoints
        icon={<TVIcon />}
        quantitativeWord={"Exclusive"}
        description={"webinar access"}
        first={true}
      />
      <CoursesSellingPoints
        icon={<EducationIcon />}
        quantitativeWord={"₹94,500"}
        description={"Scholorships Worth"}
        first={false}
      />
      <CoursesSellingPoints
        icon={<ADSIcon />}
        quantitativeWord={"Ad Free"}
        description={"learning experience"}
        first={true}
      />
    </div>
  );
};

export default CourseDescription;
