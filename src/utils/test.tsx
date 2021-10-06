import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";

export const renderWithTheme = (component: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
