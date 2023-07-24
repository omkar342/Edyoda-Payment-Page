import React from "react";
import { ErrorClockIcon } from "../../Icons/Icons.js";

const CheckoutContainer = (props) => {
  return (
    <div className="checkout_container">
      <div className="total_fee">
        <p>Subscription Fee</p>
        <p>₹ 18,500</p>
      </div>
      <div className="offer_container">
        <div className="discount">
          <p>Limited Offer time</p>

          <p style={{ fontSize: "10px" }}>
            {" "}
            <ErrorClockIcon></ErrorClockIcon>
            Offer Valid till 25th of march 2023
          </p>
        </div>
        <div>
          <p>- ₹ 18,401</p>
        </div>
      </div>
      <div className="final_fee">
        <p>Total (Incl. of 18% GST)</p>
        <p>₹{props.totalFee}</p>
      </div>
    </div>
  );
};

export default CheckoutContainer;
