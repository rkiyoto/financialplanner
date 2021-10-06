import React from "react";

import { Amount } from "../types";
import { getDateFromNow } from "../../../utils/months";

import * as S from "./monthlyAmount.styled";

interface MonthlyAmountProps {
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
      <strong title={`$${monthlyAmount}`}>{`$${monthlyAmount}`}</strong>
    </S.MonthlyAmountValues>
    <S.MonthlyAmountDescription>
      <p>
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
