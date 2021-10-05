/* eslint-disable no-console */
import React, { useEffect } from "react";

import { getDateFromNow } from "../../utils/months";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import * as S from "./reachDatePicker.styled";

interface ReachDatePickerProps {
  current: number;
  prevClick: () => void;
  nextClick: () => void;
}

const ReachDatePicker = ({
  current,
  prevClick,
  nextClick,
}: ReachDatePickerProps) => {
  const dateFromNow = getDateFromNow(current);

  useEffect(() => {
    const picker = document.getElementById(
      "picker-container"
    ) as HTMLDivElement;
    picker.addEventListener("keydown", (event) => {
      if (event.code === "ArrowLeft") {
        prevClick();
      }
      if (event.code === "ArrowRight") {
        nextClick();
      }
    });
  }, []);

  const handleButtonClick = (event: React.MouseEvent) => {
    if (event.currentTarget.id === "previousClick") {
      prevClick();
    } else {
      nextClick();
    }
  };

  return (
    <S.Container id="picker-container" tabIndex={0}>
      <S.ArrowButton
        name="previous-button"
        id="previousClick"
        onClick={handleButtonClick}
        disabled={current <= 0}
      >
        <LeftArrow />
      </S.ArrowButton>
      <S.DateView>
        <strong>{dateFromNow.month}</strong>
        <p>{dateFromNow.year}</p>
      </S.DateView>
      <S.ArrowButton
        name="next-button"
        id="nextClick"
        onClick={handleButtonClick}
      >
        <RightArrow />
      </S.ArrowButton>
    </S.Container>
  );
};

export default ReachDatePicker;
