import React from "react";

import * as S from "./head.styled";

interface HeadSectionProps {
  title: string;
  image: React.ReactNode;
}

const HeadSection = ({ title, image }: HeadSectionProps) => (
  <S.HeadSection>
    <S.Icon>{image}</S.Icon>
    <S.HeadTextSection>
      <h2>{title}</h2>
      <h3>Saving goal</h3>
    </S.HeadTextSection>
  </S.HeadSection>
);

export default HeadSection;
