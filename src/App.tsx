import React from "react";

import { ThemeProvider } from "styled-components";
import theme from './style/theme'

import Home from "./components/Home";

export function App(): JSX.Element {
  return <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
}
