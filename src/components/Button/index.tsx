import React from "react";

import * as S from "./button.styled";

interface ButtonProps {
  children: string | React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
