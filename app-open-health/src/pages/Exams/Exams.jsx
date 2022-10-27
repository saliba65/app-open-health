import React, { useState } from "react";
import { useIntl } from "react-intl";
// import { style } from "../../style";
import Portal from "../../components/templates/Portal/Portal";
import { PageTitle } from "../../components/core/Typography/Typography";
import { Avatar } from "../../components/core/Avatar/AvatarStyle";
import Flex from "../../components/core/Grid/Flex";
import { style } from "../../style";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as FileMedical } from "../../assets/icons/file-medical.svg";

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
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const renderHistoryItem = (item, i) => {
    return (
      <HistoryItem
        onClick={() =>
          document
            .querySelector(`#${"gift"}-${i}`)
            .classList.toggle("uncollapsed")}
        key={`${"gift"}-${i}`}
        id={`${"gift"}-${i}`}
        collapse
      >
        <FileMedical />
        <Flex flexDirection="column" flex="1 0 0">
          <Flex>
            <Title>
              {"Hemograma "}
            </Title>
            {isDesktop
              ? <Score>
                  {"Disponível"}
                </Score>
              : <RegisteredAt>
                  {"27/10/2022"}
                </RegisteredAt>}
            <ArrowLeftIcon className="collapse-trigger" />
          </Flex>
          {!isDesktop
            ? <Score>
                {"Disponível"}
              </Score>
            : <RegisteredAt>
                {"27/10/2022"}
              </RegisteredAt>}
          <Justification className="collapse-element">
            {"Clique aqui para visualizar o laudo"}
          </Justification>
        </Flex>
      </HistoryItem>
    );
  };
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
            {"Confira aqui os seus ultimos exames"}
          </p>
        </Flex>
      </Header>
      <ContainerHistory>
        <History>
          {renderHistoryItem("", 1)}
          {renderHistoryItem("", 2)}
          {renderHistoryItem("", 3)}
          {renderHistoryItem("", 4)}
          {renderHistoryItem("", 5)}
          {renderHistoryItem("", 6)}
          {renderHistoryItem("", 7)}
        </History>
      </ContainerHistory>
    </Portal>
  );
};

export default Exams;
