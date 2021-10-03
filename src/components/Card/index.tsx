/* eslint-disable no-console */
import React, { useState } from "react";

import AmountInput from "../AmountInput";
import ReachDatePicker from "../ReachDatePicker";
import { ReactComponent as House } from "../../assets/icons/buy-a-house.svg";
import * as S from "./card.styled";

const Card = () => {
  const [monthlyAmount, setMonthlyAmount] = useState<string>("0");
  const [reachDate, setReachDate] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const amount = document.getElementById("amount") as HTMLInputElement;
    const result = (Number(amount.value) / reachDate)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      .replace(/[.,]00$/, "");
    setMonthlyAmount(result);
  };

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

      <form onSubmit={handleSubmit}>
        <S.InputSection>
          <S.InputField>
            <S.InputLabel>Total amount</S.InputLabel>
            <AmountInput />
          </S.InputField>
          <S.InputField>
            <S.InputLabel>Reach goal by</S.InputLabel>
            <ReachDatePicker
              prevClick={() => reachDate > 0 && setReachDate(reachDate - 1)}
              nextClick={() => setReachDate(reachDate + 1)}
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
              You’re planning <strong>48 monthly deposits</strong> to reach your{" "}
              <strong>$25,000</strong> goal by <strong>October 2020</strong>.
            </p>
          </S.MonthlyAmountDescription>
        </S.MonthlyAmountInfo>

        <S.ConfirmButton>Confirm</S.ConfirmButton>
      </form>
    </S.Container>
  );
};

export default Card;
