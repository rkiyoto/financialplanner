/* eslint-disable no-console */
import React from "react";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import * as S from "./reachDatePicker.styled";

interface ReachDatePickerProps {
  current: number;
  prevClick: () => void;
  nextClick: () => void;
}

const MONTH_LIST = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ReachDatePicker = ({
  current,
  prevClick,
  nextClick,
}: ReachDatePickerProps) => {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  const yearOffset = Math.floor((todayMonth + current) / 12);

  return (
    <S.Container>
      <S.ArrowButton onClick={prevClick} disabled={current <= 0}>
        <LeftArrow />
      </S.ArrowButton>
      <S.DateView>
        <strong>{MONTH_LIST[(todayMonth + current) % 12]}</strong>
        <p>{todayYear + yearOffset}</p>
      </S.DateView>
      <S.ArrowButton onClick={nextClick}>
        <RightArrow />
      </S.ArrowButton>
    </S.Container>
  );
};

export default ReachDatePicker;
