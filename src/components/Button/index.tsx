import React from "react";

import * as S from "./button.styled";

interface ButtonProps {
  children: string | React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick, ...props }: ButtonProps) => (
  <S.Button onClick={onClick} {...props}>
    {children}
  </S.Button>
);

export default Button;
