import React, { useState } from "react";
import SubscriptionButton from "../../Button Components/Subscription Buttons/SubscriptionButton";

const SubscriptionButtonContainer = (props) => {
  const [selectedMonth, setSelectedMonth] = useState(12);
  return (
    <div className="subscription_button_container">
      <SubscriptionButton
        months={12}
        fee={8}
        recommended={false}
        disabled={true}
        setTotalFee={props.setTotalFee}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <SubscriptionButton
        months={12}
        fee={15}
        recommended={true}
        disabled={false}
        setTotalFee={props.setTotalFee}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <SubscriptionButton
        months={6}
        fee={25}
        recommended={false}
        disabled={false}
        setTotalFee={props.setTotalFee}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <SubscriptionButton
        months={3}
        fee={33}
        recommended={false}
        disabled={false}
        setTotalFee={props.setTotalFee}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
    </div>
  );
};

export default SubscriptionButtonContainer;
