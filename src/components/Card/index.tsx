/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

import { ReactComponent as House } from "../../assets/icons/buy-a-house.svg";

import HeadSection from "./Head";
import InputSection from "./InputSection";
import MonthlyAmount from "./MonthlyAmount";

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
      <HeadSection title="Buy a house" image={<House />} />

      <InputSection
        amount={amount}
        reachDate={reachDate}
        setAmount={setAmount}
        setReachDate={setReachDate}
      />

      <MonthlyAmount
        monthlyAmount={monthlyAmount}
        amount={amount}
        reachDate={reachDate}
      />

      <S.ConfirmButton onClick={() => console.log("Confirm action here")}>
        Confirm
      </S.ConfirmButton>
    </S.Container>
  );
};

export default Card;
