import React from "react";
import Portal from "../../components/templates/Portal/Portal";
import { PageTitle } from "../../components/core/Typography/Typography";
import Flex from "../../components/core/Grid/Flex";
import * as S from "./OurPartnersStyle";
import image from "../../assets/img/openHealthLogo.png";

export default function OurPartners() {
  return (
    <Portal>
      <PageTitle title={"Nossos parceiros"} />
      <Flex flexDirection="column" p={4}>
        <S.OurCompaniesList>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
          <S.CompanyCard
            onClick={() => window.open("https://www.google.com.br", "_blank")}
          >
            <img src={image} alt={"teste"} />
            <S.CompanyInfo>
              <h1>
                {"Titule"}
              </h1>
              <h2>
                {"Caption"}
              </h2>
              <p>
                {"description"}
              </p>
            </S.CompanyInfo>
          </S.CompanyCard>
        </S.OurCompaniesList>
      </Flex>
    </Portal>
  );
}
