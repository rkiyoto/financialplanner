import React from "react";

import { Amount } from "../types";
import { getDateFromNow } from "../../../utils/months";

import * as S from "./monthlyAmount.styled";

export interface MonthlyAmountProps {
  monthlyAmount: string;
  reachDate: number;
  amount: Amount;
}

const MonthlyAmount = ({
  monthlyAmount,
  reachDate,
  amount,
}: MonthlyAmountProps) => (
  <S.MonthlyAmountInfo>
    <S.MonthlyAmountValues>
      <h2>Monthly amount</h2>
      <strong
        data-testid="monthly-amount-text"
        title={`$${monthlyAmount}`}
      >{`$${monthlyAmount}`}</strong>
    </S.MonthlyAmountValues>
    <S.MonthlyAmountDescription>
      <p data-testid="monthly-amount-description">
        You’re planning <strong>{reachDate} monthly deposits</strong> to reach
        your <strong>${amount[1]}</strong> goal by{" "}
        <strong>{`${getDateFromNow(reachDate).month} ${
          getDateFromNow(reachDate).year
        }`}</strong>
        .
      </p>
    </S.MonthlyAmountDescription>
  </S.MonthlyAmountInfo>
);

export default MonthlyAmount;
