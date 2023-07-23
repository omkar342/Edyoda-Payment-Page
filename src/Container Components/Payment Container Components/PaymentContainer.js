import React from "react";
import "./PaymentContainer.css";
import Stages from "./Stages";
import RazorpayImage from "./RazorpayImage";

const PaymentContainer = () => {
  return (
    <div className="payment_container">
      <Stages />
      <p>Select your subcription plan</p>
      <RazorpayImage />
    </div>
  );
};

export default PaymentContainer;
