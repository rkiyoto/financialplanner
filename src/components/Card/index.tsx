import React from "react";

import { ReactComponent as House } from "../../assets/icons/buy-a-house.svg";
import * as S from "./card.styled";

const Card = () => (
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
        <S.Input type="currency" />
      </S.InputField>
      <S.InputField>
        <S.InputLabel>Reach goal by</S.InputLabel>
        <S.Input />
      </S.InputField>
    </S.InputSection>

    <S.MonthlyAmountInfo>
      <S.MonthlyAmountValues>
        <h2>Monthly amount</h2>
        <strong title="$521">$525</strong>
      </S.MonthlyAmountValues>
      <S.MonthlyAmountDescription>
        <p>
          You’re planning <strong>48 monthly deposits</strong> to reach your{" "}
          <strong>$25,000</strong> goal by <strong>October 2020</strong>.
        </p>
      </S.MonthlyAmountDescription>
    </S.MonthlyAmountInfo>

    <S.ConfirmButton>Confirm</S.ConfirmButton>
  </S.Container>
);

export default Card;
