import React from "react";
import Portal from "../../components/templates/Portal/Portal";
import { PageTitle } from "../../components/core/Typography/Typography";
import Flex from "../../components/core/Grid/Flex";
import * as S from "./OurPartnersStyle";
import image from "../../assets/img/openHealthLogo.png";
import pardini from "../../assets/img/hermes-pardini.png";
import unimed from "../../assets/img/unimed.png";
import fleury from "../../assets/img/fleury.png";
import sus from "../../assets/img/sus.png";
import materdei from "../../assets/img/materdei.png";
import amil from "../../assets/img/amil.png";
import feliciorocho from "../../assets/img/feliciorocho.png";
import sulamerica from "../../assets/img/sulamerica.png";

export default function OurPartners() {
  return (
    <Portal>
      <PageTitle title={"Nossos parceiros"} />
      <Flex flexDirection="column" p={4}>
        <S.OurCompaniesList>
          <S.CompanyCard
            onClick={() =>
              window.open("https://www.hermespardini.com.br", "_blank")}
          >
            <img src={pardini} alt={"Hermes Pardini"} />
            <S.CompanyInfo>
              <h1>
                {"Hermes Pardini"}
              </h1>
              <h2>
                {"Medicina, Saúde e Bem-estar"}
              </h2>
              <p>
                {
                  "8 mil exames oferecidos pelo Grupo Pardini podem ser feitos hoje em 1.930 municípios do país."
                }
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() =>
              window.open("https://www.unimed.coop.br/site/", "_blank")}
          >
            <img src={unimed} alt={"Unimed"} />
            <S.CompanyInfo>
              <h1>
                {"Unimed"}
              </h1>
              <h2>
                {"O melhor plano de saúde é viver"}
              </h2>
              <p>
                {
                  "A Confederação Nacional das Cooperativas Médicas é um sistema que atua como operador de planos de saúde."
                }
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.fleury.com.br", "_blank")}
          >
            <img src={fleury} alt={"Fleury"} />
            <S.CompanyInfo>
              <h1>
                {"Fleury"}
              </h1>
              <h2>
                {"Faça seus exames no Fleury"}
              </h2>
              <p>
                {
                  "Equipe altamente treinada com excelência na realização de diagnósticos. São diversas soluções em medicina e saúde."
                }
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() =>
              window.open("https://www.saude.mg.gov.br/sus", "_blank")}
          >
            <img src={sus} alt={"SUS"} />
            <S.CompanyInfo>
              <h1>
                {"SUS"}
              </h1>
              <h2>
                {"Sistema Único de Saúde"}
              </h2>
              <p>
                {
                  "Sistema público de saúde brasileiro criado pela Constituição Federal de 1988 pelo texto elaborado durante a Assembleia Nacional Constituinte de 1987-1988"
                }
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.materdei.com.br", "_blank")}
          >
            <img src={materdei} alt={"materdei"} />
            <S.CompanyInfo>
              <h1>
                {"MaterDei"}
              </h1>
              <h2>
                {"Hospital Mater Dei SA"}
              </h2>
              <p>
                {
                  "Somos uma rede de saúde completa, fazendo tudo pra você ficar bem. "
                }
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() =>
              window.open("https://institucional.amil.com.br", "_blank")}
          >
            <img src={amil} alt={"Amil"} />
            <S.CompanyInfo>
              <h1>
                {"Amil"}
              </h1>
              <h2>
                {"Planos de Saúde com a Qualidade AMIL"}
              </h2>
              <p>
                {
                  "A Amil é uma empresa brasileira de assistência médica, fundada em 1978"
                }
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() =>
              window.open("https://www.feliciorocho.org.br", "_blank")}
          >
            <img src={feliciorocho} alt={"Hospital Felício Rocho"} />
            <S.CompanyInfo>
              <h1>
                {"Hospital Felício Rocho"}
              </h1>
              <h2>
                {"Para atender a população da capital mineira"}
              </h2>
              <p>
                {
                  "O Hospital Felício Rocho é um dos maiores e mais importantes hospitais gerais de Belo Horizonte"
                }
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() =>
              window.open(
                "https://portal.sulamericaseguros.com.br/para-voce/saude/",
                "_blank"
              )}
          >
            <img src={sulamerica} alt={"SulAmérica"} />
            <S.CompanyInfo>
              <h1>
                {"SulAmérica"}
              </h1>
              <h2>
                {"O SulAmérica Saúde foi feito sob medida para você"}
              </h2>
              <p>
                {
                  "Venha conhecer o melhor plano de saude com atendimento nos melhores hospitais do país"
                }
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
        </S.OurCompaniesList>
      </Flex>
    </Portal>
  );
}
