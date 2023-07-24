import React, { useState } from "react";
import "./SubscriptionButtons.css";

const options = [
  { months: 12, fee: 8, recommended: false, disabled: true },
  { months: 12, fee: 15, recommended: true, disabled: false },
  { months: 6, fee: 25, recommended: false, disabled: false },
  { months: 9, fee: 33, recommended: false, disabled: false },
];

const SubscriptionButtons = () => {
  const [selectedOption, setSelectedOption] = useState(options[1]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="subscription-buttons-container">
      {options.map((option) => (
        <label
          key={option.months}
          className={`subscription-button  ${
            selectedOption.months === option.months && !option.disabled
              ? "selected"
              : ""
          } ${option.disabled ? "disabled" : ""} ${
            option.recommended || option.disabled
              ? "recommended-subscription-button"
              : ""
          }`}
        >
          <input
            type="radio"
            name="subscription"
            value={option.months}
            checked={selectedOption.months === option.months}
            onChange={() => handleOptionChange(option)}
            disabled={option.disabled}
          />
          <div
            className={`subscription-button-content ${
              option.recommended ? "recommended" : ""
            }`}
          >
            {option.recommended && (
              <span className="recommended-tag">Recommended</span>
            )}
            {option.disabled && (
              <span className="expired-tag">Offer expired</span>
            )}
            <span className="months">{option.months} Months Subscription</span>
          </div>
          <div className="total_fees">
            <p className="fee">
              Total{" "}
              <span style={{ fontWeight: "bold" }}>
                {option.fee * option.months - 1}
              </span>
            </p>
            <p className="fee">
              Rs. <span style={{ fontWeight: "bold" }}>{option.fee}</span>/month
            </p>
          </div>
        </label>
      ))}
      <div className="pricing">
        <p>Total Rs.{selectedOption.fee * selectedOption.months - 1}</p>
      </div>
    </div>
  );
};

export default SubscriptionButtons;
