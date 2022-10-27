import React from "react";
import { useIntl } from "react-intl";
// import { style } from "../../style";
import Portal from "../../components/templates/Portal/Portal";
import { PageTitle } from "../../components/core/Typography/Typography";
import { Avatar } from "../../components/core/Avatar/AvatarStyle";
import Flex from "../../components/core/Grid/Flex";
// import { ReactComponent as IconCoins } from "../../assets/icons/iconCoins.svg";

import {
  Header,
  History,
  HistoryItem,
  Title,
  RegisteredAt,
  Score,
  Justification,
  ContainerHistory
} from "./ExamsStyle";

const Exams = () => {
  return (
    <Portal>
      <PageTitle title={"Exames"} />

      <Header>
        <Avatar
          size="46px"
          border="2px solid #ccd2e0"
          src="/static/media/lucas_saliba.373a8865c2874c7bdc4c.JPEG"
        />
        <Flex ml={3} flexDirection="column" justifyContent="space-between">
          <h2>
            {"Lucas Saliba, "}
          </h2>
          <p>
            {"Confira aqui os seus ultimos exames:"}
          </p>
        </Flex>
      </Header>
    </Portal>
  );
};

export default Exams;
