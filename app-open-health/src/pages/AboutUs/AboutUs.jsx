import React from "react";
import { useIntl } from "react-intl";

import Portal from "../../components/templates/Portal/Portal";
import { PageTitle } from "../../components/core/Typography/Typography";
import * as S from "./AboutUsStyle";
import logo from "../../assets/img/openHealthLogo.png";

const AboutUs = () => {
  const intl = useIntl();

  return (
    <Portal>
      <PageTitle title={intl.messages["menu.aboutUs"]} />
      <S.GeneralContainer>
        <S.ContentDetails>
          <S.ImgContainer src={logo} />
          <S.TextContent>
            <S.Text>
              O open health é uma iniciativa inovadora que segue os passos de um
              tipo de transformação que já é realidade em vários segmentos,
              especialmente o bancário. <br /> <br />Trata-se de um modelo
              aberto de compartilhamento de dados de saúde. No sentido
              corporativo, o open health traz incontáveis benefícios, como maior
              agilidade para instituições de saúde, profissionais do setor e
              demais empresas que participam do ciclo de cuidados a um paciente.
              <br /> <br />No entanto, como qualquer medida que estimula a
              circulação de dados pessoais, a saúde aberta gera preocupações e
              questionamentos. A verdade é que esse movimento ainda é novo, mas
              com muito potencial.
            </S.Text>
          </S.TextContent>
        </S.ContentDetails>
      </S.GeneralContainer>
    </Portal>
  );
};

export default AboutUs;
