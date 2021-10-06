import React from "react";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../../utils/test";
import { ReactComponent as House } from "../../../../assets/icons/buy-a-house.svg";

import HeadSection from "../";

const props = {
  title: "Buy a house",
  image: <House data-testid="house-svg" />,
};

describe("<HeadSection />", () => {
  it("must render correctly", () => {
    renderWithTheme(<HeadSection {...props} />);

    expect(screen.getByText(/buy a house/i)).toBeInTheDocument();
    expect(screen.getByTestId(/house-svg/i)).toBeInTheDocument();
  });
});
