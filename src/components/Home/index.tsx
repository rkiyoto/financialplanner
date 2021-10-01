import React from "react";
import Header from "../Header";
import Card from "../Card";

import * as S from "./home.styled";

const Home = () => (
  <S.Container>
    <Header />
    <S.SubtitleView>
      <span>
        Let&apos;s plan your <strong>saving goal</strong>.
      </span>
    </S.SubtitleView>
    <S.ContentView>
      <Card />
    </S.ContentView>
  </S.Container>
);

export default Home;
