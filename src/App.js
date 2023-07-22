import { useState } from "react";
import "./App.css";
import CourseDescription from "./Container Components/Courses Description Components/CourseDescription";
import PaymentContainer from "./Container Components/Payment Container Components/PaymentContainer";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <CourseDescription />
        <PaymentContainer />
      </div>
    </div>
  );
}

export default App;
