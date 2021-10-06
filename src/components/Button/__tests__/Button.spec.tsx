import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../utils/test";
import userEvent from "@testing-library/user-event";

import Button from "../";

const props = {
  onClick: jest.fn(),
};

describe("<Button />", () => {
  it("must call onClick callback on click event", () => {
    renderWithTheme(<Button onClick={props.onClick}>Confirm</Button>);

    userEvent.click(
      screen.getByRole("button", {
        name: /confirm/i,
      })
    );

    expect(props.onClick).toHaveBeenCalled();
  });
});
