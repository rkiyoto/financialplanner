import React from "react";
import AmountInput from "../../AmountInput";
import ReachDatePicker from "../../ReachDatePicker";
import { Amount } from "../types";

import * as S from "./inputSection.styled";

interface InputSectionProps {
  amount: Amount;
  reachDate: number;
  setAmount: (value: React.SetStateAction<[number, string]>) => void;
  setReachDate: (value: React.SetStateAction<number>) => void;
}

const InputSection = ({
  amount,
  reachDate,
  setAmount,
  setReachDate,
}: InputSectionProps) => (
  <S.InputSection>
    <S.InputField>
      <S.InputLabel>Total amount</S.InputLabel>
      <AmountInput
        amount={amount[0]}
        onChange={(value, maskedInput) => setAmount([value, maskedInput])}
      />
    </S.InputField>
    <S.InputField>
      <S.InputLabel>Reach goal by</S.InputLabel>
      <ReachDatePicker
        prevClick={() =>
          setReachDate((reachDate) =>
            reachDate > 0 ? reachDate - 1 : reachDate
          )
        }
        nextClick={() => setReachDate((reachDate) => reachDate + 1)}
        current={reachDate}
      />
    </S.InputField>
  </S.InputSection>
);

export default InputSection;
