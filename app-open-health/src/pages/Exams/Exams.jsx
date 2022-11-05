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

  const renderHistoryItem = (title, date, status, message, link, i) => {
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
              {title}
            </Title>
            {isDesktop
              ? <Score>
                  {status}
                </Score>
              : <RegisteredAt>
                  {date}
                </RegisteredAt>}
            <ArrowLeftIcon className="collapse-trigger" />
          </Flex>
          {!isDesktop
            ? <Score>
                {status}
              </Score>
            : <RegisteredAt>
                {date}
              </RegisteredAt>}
          <Justification
            className="collapse-element"
            href={link}
            target="_blank"
          >
            {message}
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
          {renderHistoryItem(
            "Sódio e potássio",
            "12/11/2022",
            "Em processamento",
            "Em breve seu exame ficará disponível",
            "",
            1
          )}
          {renderHistoryItem(
            "Hemoglobina",
            "05/11/2022",
            "Disponível",
            "Clique aqui para visualizar o laudo",
            "https://drive.google.com/file/d/1_rCuHiHPyX-jEhHFJCHq-bGz08-1Dvd-/view?usp=sharing",
            2
          )}
          {renderHistoryItem(
            "Glicemia",
            "22/10/2022",
            "Disponível",
            "Clique aqui para visualizar o laudo",
            "https://drive.google.com/file/d/1_rCuHiHPyX-jEhHFJCHq-bGz08-1Dvd-/view?usp=sharing",
            3
          )}
          {renderHistoryItem(
            "Triglicérides",
            "12/10/2022",
            "Disponível",
            "Clique aqui para visualizar o laudo",
            "https://drive.google.com/file/d/1_rCuHiHPyX-jEhHFJCHq-bGz08-1Dvd-/view?usp=sharing",
            4
          )}
          {renderHistoryItem(
            "Colesterol_LDL",
            "03/10/2022",
            "Disponível",
            "Clique aqui para visualizar o laudo",
            "https://drive.google.com/file/d/1_rCuHiHPyX-jEhHFJCHq-bGz08-1Dvd-/view?usp=sharing",
            5
          )}
          {renderHistoryItem(
            "TSH",
            "15/08/2022",
            "Disponível",
            "Clique aqui para visualizar o laudo",
            "https://drive.google.com/file/d/1_rCuHiHPyX-jEhHFJCHq-bGz08-1Dvd-/view?usp=sharing",
            6
          )}
          {renderHistoryItem(
            "T4",
            "15/08/2022",
            "Disponível",
            "Clique aqui para visualizar o laudo",
            "https://drive.google.com/file/d/1_rCuHiHPyX-jEhHFJCHq-bGz08-1Dvd-/view?usp=sharing",
            7
          )}
          {renderHistoryItem(
            "Transaminases ",
            "10/05/2022",
            "Disponível",
            "Clique aqui para visualizar o laudo",
            "https://drive.google.com/file/d/1_rCuHiHPyX-jEhHFJCHq-bGz08-1Dvd-/view?usp=sharing",
            8
          )}
          {renderHistoryItem(
            "Creatinina ",
            "11/02/2022",
            "Disponível",
            "Clique aqui para visualizar o laudo",
            "https://drive.google.com/file/d/1_rCuHiHPyX-jEhHFJCHq-bGz08-1Dvd-/view?usp=sharing",
            9
          )}
        </History>
      </ContainerHistory>
    </Portal>
  );
};

export default Exams;
