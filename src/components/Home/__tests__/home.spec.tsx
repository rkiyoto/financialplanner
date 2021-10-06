import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../utils/test";

import Home from "../";

describe("<Home />", () => {
  it("must render correctly", () => {
    renderWithTheme(<Home />);

    expect(screen.getByTestId(/subtitle-text/i)).toHaveTextContent(
      `Let's plan your saving goal.`
    );
    expect(screen.getByTestId(/card-view/i)).toBeInTheDocument();
  });
});
