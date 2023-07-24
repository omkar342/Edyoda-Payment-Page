import React, { useState } from "react";
import "./SubscriptionButton.css";

const SubscriptionButtons = (props) => {
  const handleOptionChange = (month) => {
    props.setTotalFee(props.fee * props.months - 1);
    props.setSelectedMonth(month);
  };

  return (
    <div className="subscription-buttons-container">
      <label
        key={props.months}
        className={`subscription-button  ${
          props.selectedMonth === props.months && !props.disabled
            ? "selected"
            : ""
        } ${props.disabled ? "disabled" : ""} ${
          props.recommended || props.disabled
            ? "recommended-subscription-button"
            : ""
        }`}
      >
        <input
          type="radio"
          name="subscription"
          value={props.months}
          checked={props.selectedMonth === props.months}
          onChange={() => handleOptionChange(props.months)}
          disabled={props.disabled}
        />
        <div
          className={`subscription-button-content ${
            props.recommended ? "recommended" : ""
          }`}
        >
          {props.recommended && (
            <span className="recommended-tag">Recommended</span>
          )}
          {props.disabled && <span className="expired-tag">Offer expired</span>}
          <span className="months">{props.months} Months Subscription</span>
        </div>
        <div className="total_fees">
          <p className="fee">
            Total{" "}
            <span style={{ fontWeight: "bold" }}>
              {props.fee * props.months - 1}
            </span>
          </p>
          <p className="fee">
            Rs. <span style={{ fontWeight: "bold" }}>{props.fee}</span>/month
          </p>
        </div>
      </label>
    </div>
  );
};

export default SubscriptionButtons;
