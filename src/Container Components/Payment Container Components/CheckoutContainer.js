import React from "react";

const CheckoutContainer = () => {
  return (
    <div className="checkout_container">
      <div className="total_fee">
        <p>Subscription Fee</p>
        <p>₹ 18,5000</p>
      </div>
      <div className="offer_container">
        <div className="discount">
          <p>Limited Offer time</p>
          <p>-₹18,401</p>
        </div>
        <p>Offer Valid till 25th of march 2023</p>
      </div>
      <div className="final_fee">
        <p>Total (Incl. of 18% GST)</p>
        <p>₹149</p>
      </div>
    </div>
  );
};

export default CheckoutContainer;
