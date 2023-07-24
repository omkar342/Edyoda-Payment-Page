import React from "react";
import "./PaymentContainer.css";
import Stages from "./Stages";
import RazorpayImage from "./RazorpayImage";
import UtilityButtons from "../../Button Components/Utility Buttons/UtilityButtons";
import SubscriptionButtonContainer from "./SubscriptionButtonContainer";
import CheckoutContainer from "./CheckoutContainer";

const PaymentContainer = () => {
  return (
    <div className="payment_container">
      <Stages />
      <p>Select your subcription plan</p>
      <SubscriptionButtonContainer />
      <CheckoutContainer />
      <UtilityButtons />
      <RazorpayImage />
    </div>
  );
};

export default PaymentContainer;
