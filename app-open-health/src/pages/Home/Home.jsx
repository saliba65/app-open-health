import React from "react";
import Portal from "../../components/templates/Portal/Portal";
import * as S from "./HomeStyle";

const Home = () => {
  return (
    <Portal>
      <S.Container>
        <h1>Open Health</h1>
      </S.Container>
    </Portal>
  );
};

export default Home;
