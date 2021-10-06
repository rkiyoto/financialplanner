import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../../utils/test";

import MonthlyAmount, { MonthlyAmountProps } from "../";

const props: MonthlyAmountProps = {
  monthlyAmount: "325",
  reachDate: 5,
  amount: [25000, "25,000.00"],
};

describe("<MonthlyAmount />", () => {
  it("must render correctly", () => {
    renderWithTheme(<MonthlyAmount {...props} />);

    expect(
      screen.getByRole("heading", {
        name: /monthly amount/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByTestId(/monthly-amount-text/i)).toHaveTextContent(
      "$325"
    );
    expect(screen.getByTestId(/monthly-amount-description/i)).toHaveTextContent(
      `You’re planning 5 monthly deposits to reach your $25,000.00 goal by March 2022.`
    );
  });
});
