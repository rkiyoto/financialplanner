import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../utils/test";
import userEvent from "@testing-library/user-event";

import AmountInput from "../";

const props = {
  amount: 25000,
  onChange: jest.fn(),
};

describe("<AmountInput />", () => {
  it("must render correctly", () => {
    renderWithTheme(<AmountInput {...props} />);

    expect(screen.getByTestId("dollar-sign")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("must call onChange callback on user type", () => {
    renderWithTheme(<AmountInput {...props} />);

    userEvent.clear(screen.getByRole("textbox"));
    userEvent.type(screen.getByRole("textbox"), "3525000");

    expect(props.onChange).toHaveBeenLastCalledWith(35250, "35,250.00");
  });
});
