/* eslint-disable no-console */
import React from "react";
import { ReactComponent as Dollar } from "../../assets/dollar.svg";

import * as S from "./amountInput.styled";

interface AmountInputProps {
  amount: number;
  onChange: (value: number, maskedvalue: string) => void;
}

const AmountInput = ({ amount, onChange }: AmountInputProps) => {
  const handleInputChange = (
    event: React.SyntheticEvent,
    maskedvalue: string,
    floatvalue: number
  ) => {
    onChange(floatvalue, maskedvalue);
  };

  return (
    <S.Container>
      <Dollar />
      <S.AmountInput value={amount} onChangeEvent={handleInputChange} />
    </S.Container>
  );
};

export default AmountInput;
