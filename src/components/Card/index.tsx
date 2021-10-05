/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

import AmountInput from "../AmountInput";
import ReachDatePicker from "../ReachDatePicker";
import { getDateFromNow } from "../../utils/months";
import { ReactComponent as House } from "../../assets/icons/buy-a-house.svg";
import * as S from "./card.styled";

const Card = () => {
  const [amount, setAmount] = useState<[number, string]>([0, "0"]);
  const [reachDate, setReachDate] = useState<number>(1);
  const [monthlyAmount, setMonthlyAmount] = useState<string>("0");

  useEffect(() => {
    const timeWindow = reachDate > 0 ? reachDate : 1;
    const result = (amount[0] / timeWindow)
      .toFixed(2) // .99 decimals
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") // 1,000,000 format
      .replace(/[.,]00$/, ""); // remove unecessary decimals
    setMonthlyAmount(result);
  }, [reachDate, amount]);

  return (
    <S.Container>
      <S.HeadSection>
        <S.Icon>
          <House />
        </S.Icon>
        <S.HeadTextSection>
          <h2>Buy a house</h2>
          <h3>Saving goal</h3>
        </S.HeadTextSection>
      </S.HeadSection>

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

      <S.MonthlyAmountInfo>
        <S.MonthlyAmountValues>
          <h2>Monthly amount</h2>
          <strong title={`$${monthlyAmount}`}>{`$${monthlyAmount}`}</strong>
        </S.MonthlyAmountValues>
        <S.MonthlyAmountDescription>
          <p>
            You’re planning <strong>{reachDate} monthly deposits</strong> to
            reach your <strong>${amount[1]}</strong> goal by{" "}
            <strong>{`${getDateFromNow(reachDate).month} ${
              getDateFromNow(reachDate).year
            }`}</strong>
            .
          </p>
        </S.MonthlyAmountDescription>
      </S.MonthlyAmountInfo>

      <S.ConfirmButton>Confirm</S.ConfirmButton>
    </S.Container>
  );
};

export default Card;
