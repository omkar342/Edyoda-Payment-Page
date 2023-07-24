import React, { useState } from "react";
import "./PaymentContainer.css";
import Stages from "./Stages";
import RazorpayImage from "./RazorpayImage";
import UtilityButtons from "../../Button Components/Utility Buttons/UtilityButtons";
import SubscriptionButtonContainer from "./SubscriptionButtonContainer";
import CheckoutContainer from "./CheckoutContainer";

const PaymentContainer = () => {
  const [totalFee, setTotalFee] = useState(143);

  console.log(totalFee, "total fee");

  return (
    <div className="payment_container">
      <Stages />
      <p>Select your subcription plan</p>
      <SubscriptionButtonContainer
        totalFee={totalFee}
        setTotalFee={setTotalFee}
      />
      <CheckoutContainer totalFee={totalFee} />
      <UtilityButtons />
      <RazorpayImage />
    </div>
  );
};

export default PaymentContainer;
