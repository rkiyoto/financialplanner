/* eslint-disable no-console */
import React, { useState } from "react";

const format = (input: string) =>
  input.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

const AmountInput = () => {
  const [formattedAmount, setFormattedAmount] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: needs formatting
    setFormattedAmount(e.currentTarget.value);
  };

  return (
    <input
      id="amount"
      type="number"
      name="amount"
      value={formattedAmount}
      onChange={(event) => handleInputChange(event)}
    />
  );
};

export default AmountInput;
