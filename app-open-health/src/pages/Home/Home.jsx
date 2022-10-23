import React from "react";
import Portal from "../../components/templates/Portal/Portal";
import { PageTitle } from "../../components/core/Typography/Typography";
import * as S from "./HomeStyle";

const Home = () => {
  return (
    <Portal>
      <PageTitle title={"Mural"} />
      <S.Container>
        <h1>Open Health</h1>
      </S.Container>
    </Portal>
  );
};

export default Home;
