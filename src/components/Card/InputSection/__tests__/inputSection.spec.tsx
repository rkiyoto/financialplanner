import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../../utils/test";

import InputSection, { InputSectionProps } from "../";

const props: InputSectionProps = {
  amount: [25000, "25,000.00"],
  reachDate: 3,
  setAmount: jest.fn(),
  setReachDate: jest.fn(),
};

Date.now = jest.fn(() => 1633489186687); //05.10.2021

describe("<InputSection />", () => {
  it("must render correctly", () => {
    renderWithTheme(<InputSection {...props} />);
    expect(
      screen.getByRole("heading", {
        name: /total amount/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue("25,000.00");

    expect(
      screen.getByRole("heading", {
        name: /reach goal by/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByTestId("date-view")).toHaveTextContent("January2022");
  });
});
