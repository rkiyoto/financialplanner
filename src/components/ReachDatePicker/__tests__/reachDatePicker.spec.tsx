import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../utils/test";

import ReachDatePicker from "../";
import userEvent from "@testing-library/user-event";

const props = {
  current: 0,
  prevClick: jest.fn(),
  nextClick: jest.fn(),
};

Date.now = jest.fn(() => 1633489186687); //05.10.2021

describe("<ReachDatePicker />", () => {
  it("must render correctly", () => {
    renderWithTheme(<ReachDatePicker {...props} />);

    expect(screen.getByTestId("date-view")).toHaveTextContent("October2021");
  });

  it("must show correct month acording to current modifier", () => {
    renderWithTheme(<ReachDatePicker {...props} current={10} />);

    expect(screen.getByTestId("date-view")).toHaveTextContent("August2022");
  });

  it("must show call previous month action on left arrow button click", () => {
    renderWithTheme(<ReachDatePicker {...props} current={10} />);

    expect(screen.getByTestId("date-view")).toHaveTextContent("August2022");
    userEvent.click(screen.getByRole("button", { name: "arrow-left.svg" }));
    expect(props.prevClick).toHaveBeenCalled();
  });

  it("must show call next month action on right arrow button click", () => {
    renderWithTheme(<ReachDatePicker {...props} current={10} />);

    expect(screen.getByTestId("date-view")).toHaveTextContent("August2022");
    userEvent.click(screen.getByRole("button", { name: "arrow-right.svg" }));
    expect(props.nextClick).toHaveBeenCalled();
  });

  it("must show call previous month action on left arrow keyboard button pressed", async () => {
    renderWithTheme(<ReachDatePicker {...props} current={10} />);

    expect(screen.getByTestId("date-view")).toHaveTextContent("August2022");
    userEvent.click(screen.getByTestId(/picker-container/i)); // This should set focus on picker outer container
    userEvent.keyboard("[ArrowLeft]");
    expect(props.prevClick).toHaveBeenCalled();
  });

  it("must show call next month action on right arrow keyboard button pressed", () => {
    renderWithTheme(<ReachDatePicker {...props} current={10} />);

    expect(screen.getByTestId("date-view")).toHaveTextContent("August2022");
    userEvent.click(screen.getByTestId(/picker-container/i));
    userEvent.keyboard("[ArrowRight]");
    expect(props.nextClick).toHaveBeenCalled();
  });
});
