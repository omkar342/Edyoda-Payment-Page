import React from "react";
import "./PaymentContainer.css";
import Stages from "./Stages";
import RazorpayImage from "./RazorpayImage";
import UtilityButtons from "../../Button Components/Utility Buttons/UtilityButtons";

const PaymentContainer = () => {
  return (
    <div className="payment_container">
      <Stages />
      <p>Select your subcription plan</p>
      <UtilityButtons />
      <RazorpayImage />
    </div>
  );
};

export default PaymentContainer;
