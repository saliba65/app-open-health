import React, { useState } from "react";
import Portal from "../../components/templates/Portal/Portal";
import { PageTitle } from "../../components/core/Typography/Typography";
import * as H from "./HomeStyle";
import * as S from "../Configurations/ConfigurationsStyle";
import Flex from "../../components/core/Grid/Flex";
import { Switch } from "../../components/core/Form/Form";
import urls from "../../constants/urls";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Home = () => {
  const [glicemi, setGlicemi] = useState(true);
  const [hemoglob, setHemoglob] = useState(true);
  const [tsh, setTsh] = useState(false);
  const [t4, setT4] = useState(false);
  const [triglicerid, setTriglicerid] = useState(true);
  const [colesterol, setColesterol] = useState(false);

  const boxConfigLink = (hrefUrl, hrefTarget, msgText) =>
    <S.BoxConfig isDashboard>
      <S.LinkPassword href={`${hrefUrl}`} target={hrefTarget}>
        <Flex justifyContent="space-between">
          <S.TextLink>
            {msgText}
          </S.TextLink>
        </Flex>
      </S.LinkPassword>
    </S.BoxConfig>;

  const data = [
    {
      name: "Jan",
      Glicemia: 68,
      Hemoglobina: 14.0,
      Triglicérides: 120,
      Colesterol_LDL: 115,
      TSH: 0.8,
      T4: 0.5
    },
    {
      name: "Fev",
      Glicemia: 72,
      Hemoglobina: 14.8,
      Triglicérides: 126,
      Colesterol_LDL: 120,
      TSH: 0.4,
      T4: 0.8
    },
    {
      name: "Mar",
      Glicemia: 75,
      Hemoglobina: 12.5,
      Triglicérides: 130,
      Colesterol_LDL: 122,
      TSH: 0.2,
      T4: 1.4
    },
    {
      name: "Abr",
      Glicemia: 88,
      Hemoglobina: 13.2,
      Triglicérides: 127,
      Colesterol_LDL: 125,
      TSH: 0.7,
      T4: 0.9
    },
    {
      name: "Mai",
      Glicemia: 95,
      Hemoglobina: 13.8,
      Triglicérides: 135,
      Colesterol_LDL: 127,
      TSH: 1.3,
      T4: 1.2
    },
    {
      name: "Jun",
      Glicemia: 115,
      Hemoglobina: 15.5,
      Triglicérides: 138,
      Colesterol_LDL: 130,
      TSH: 1.5,
      T4: 1.0
    },
    {
      name: "Jul",
      Glicemia: 120,
      Hemoglobina: 15.2,
      Triglicérides: 149,
      Colesterol_LDL: 135,
      TSH: 1.9,
      T4: 1.6
    },
    {
      name: "Ago",
      Glicemia: 105,
      Hemoglobina: 15.9,
      Triglicérides: 145,
      Colesterol_LDL: 139,
      TSH: 2.8,
      T4: 1.8
    },
    {
      name: "Set",
      Glicemia: 95,
      Hemoglobina: 16.8,
      Triglicérides: 141,
      Colesterol_LDL: 134,
      TSH: 3.6,
      T4: 2.0
    },
    {
      name: "Out",
      Glicemia: 77,
      Hemoglobina: 18.1,
      Triglicérides: 136,
      Colesterol_LDL: 131,
      TSH: 3.9,
      T4: 1.7
    },
    {
      name: "Nov",
      Glicemia: 80,
      Hemoglobina: 16.4,
      Triglicérides: 132,
      Colesterol_LDL: 127,
      TSH: 3.5,
      T4: 1.5
    },
    {
      name: "Dez",
      Glicemia: 86,
      Hemoglobina: 15.8,
      Triglicérides: 135,
      Colesterol_LDL: 122,
      TSH: 3.2,
      T4: 1.2
    }
  ];
  return (
    <Portal>
      <PageTitle title={"Dashboard Exames"} />
      <H.Container>
        <H.Switches>
          <S.BoxConfig isDashboard>
            <Flex justifyContent="space-between">
              <S.ContainerTextSwitch>
                <S.TextLink isDashboard>Glicemia</S.TextLink>
                <Switch
                  active={glicemi}
                  onChange={() => setGlicemi(!glicemi)}
                />
              </S.ContainerTextSwitch>
            </Flex>
          </S.BoxConfig>
          <S.BoxConfig isDashboard>
            <Flex justifyContent="space-between">
              <S.ContainerTextSwitch>
                <S.TextLink isDashboard>Hemoglobina</S.TextLink>
                <Switch
                  active={hemoglob}
                  onChange={() => setHemoglob(!hemoglob)}
                />
              </S.ContainerTextSwitch>
            </Flex>
          </S.BoxConfig>
          <S.BoxConfig isDashboard>
            <Flex justifyContent="space-between">
              <S.ContainerTextSwitch>
                <S.TextLink isDashboard>Triglicérides</S.TextLink>
                <Switch
                  active={triglicerid}
                  onChange={() => setTriglicerid(!triglicerid)}
                />
              </S.ContainerTextSwitch>
            </Flex>
          </S.BoxConfig>
          <S.BoxConfig isDashboard>
            <Flex justifyContent="space-between">
              <S.ContainerTextSwitch>
                <S.TextLink isDashboard>Colesterol_LDL</S.TextLink>
                <Switch
                  active={colesterol}
                  onChange={() => setColesterol(!colesterol)}
                />
              </S.ContainerTextSwitch>
            </Flex>
          </S.BoxConfig>
          <S.BoxConfig isDashboard>
            <Flex justifyContent="space-between">
              <S.ContainerTextSwitch>
                <S.TextLink isDashboard>TSH</S.TextLink>
                <Switch active={tsh} onChange={() => setTsh(!tsh)} />
              </S.ContainerTextSwitch>
            </Flex>
          </S.BoxConfig>
          <S.BoxConfig>
            <Flex justifyContent="space-between">
              <S.ContainerTextSwitch>
                <S.TextLink isDashboard>T4</S.TextLink>
                <Switch active={t4} onChange={() => setT4(!t4)} />
              </S.ContainerTextSwitch>
            </Flex>
          </S.BoxConfig>
        </H.Switches>
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {glicemi &&
              <Line
                type="monotone"
                dataKey="Glicemia"
                stroke="#501f99"
                activeDot={{ r: 8 }}
              />}
            {hemoglob &&
              <Line
                type="monotone"
                dataKey="Hemoglobina"
                stroke="#b3247c"
                activeDot={{ r: 8 }}
              />}
            {triglicerid &&
              <Line
                type="monotone"
                dataKey="Triglicérides"
                stroke="#228B22"
                activeDot={{ r: 8 }}
              />}
            {colesterol &&
              <Line
                type="monotone"
                dataKey="Colesterol_LDL"
                stroke="#B22222"
                activeDot={{ r: 8 }}
              />}
            {tsh &&
              <Line
                type="monotone"
                dataKey="TSH"
                stroke="#00008B"
                activeDot={{ r: 8 }}
              />}
            {t4 &&
              <Line
                type="monotone"
                dataKey="T4"
                stroke="#FF4500"
                activeDot={{ r: 8 }}
              />}
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <YAxis />
            <XAxis dataKey="name" />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
        <H.Subtitle>Saiba mais sobre os exames analisados:</H.Subtitle>
        <H.Switches>
          {boxConfigLink(
            `https://pt.wikipedia.org/wiki/Glicemia`,
            "_blank",
            "Glicemia"
          )}
          {boxConfigLink(
            `https://pt.wikipedia.org/wiki/Hemoglobina`,
            "_blank",
            "Hemoglobina"
          )}
          {boxConfigLink(
            `https://pt.wikipedia.org/wiki/Triacilglicerol`,
            "_blank",
            "Triglicérides"
          )}
          {boxConfigLink(
            `https://pt.wikipedia.org/wiki/Lipoproteína_de_baixa_densidade`,
            "_blank",
            "Colesterol_LDL"
          )}
          {boxConfigLink(
            `https://pt.wikipedia.org/wiki/Hormônio_estimulante_da_tiroide`,
            "_blank",
            "TSH"
          )}
          {boxConfigLink(
            `https://pt.wikipedia.org/wiki/Tiroxina`,
            "_blank",
            "T4"
          )}
        </H.Switches>
      </H.Container>
    </Portal>
  );
};

export default Home;
