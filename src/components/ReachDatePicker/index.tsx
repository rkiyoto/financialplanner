/* eslint-disable no-console */
import React, { useEffect } from "react";
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

  useEffect(() => {
    console.log("div mount");

    const picker = document.getElementById(
      "picker-container"
    ) as HTMLDivElement;
    picker.addEventListener("keydown", (event) => {
      if (event.code === "ArrowLeft") {
        console.log("left");
        prevClick();
      }
      if (event.code === "ArrowRight") {
        console.log("right");
        nextClick();
      }
    });
  }, []);

  const handleButtonClick = (event: React.MouseEvent) => {
    // This prevents from being calculated after each reachDate update
    event.preventDefault();
    if (event.currentTarget.id === "previousClick") {
      prevClick();
    } else {
      nextClick();
    }
  };

  return (
    <S.Container id="picker-container" tabIndex={0}>
      <S.ArrowButton
        id="previousClick"
        onClick={handleButtonClick}
        disabled={current <= 0}
      >
        <LeftArrow />
      </S.ArrowButton>
      <S.DateView>
        <strong>{MONTH_LIST[(todayMonth + current) % 12]}</strong>
        <p>{todayYear + yearOffset}</p>
      </S.DateView>
      <S.ArrowButton id="nextClick" onClick={handleButtonClick}>
        <RightArrow />
      </S.ArrowButton>
    </S.Container>
  );
};

export default ReachDatePicker;
