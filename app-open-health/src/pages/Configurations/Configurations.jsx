import React, { useState } from "react";
import { useIntl } from "react-intl";

import { style } from "../../style";
import urls from "../../constants/urls";

import Portal from "../../components/templates/Portal/Portal";
import Flex from "../../components/core/Grid/Flex";
import { Switch } from "../../components/core/Form/Form";
import { PageTitle } from "../../components/core/Typography/Typography";

import Avatar from "../../components/core/Avatar/Avatar";
import * as S from "./ConfigurationsStyle";

const Configurations = () => {
  const intl = useIntl();
  const idUser = localStorage.getItem("idUser");
  const localConfig =
    JSON.parse(localStorage.getItem(`localConfig-${idUser}`)) || {};
  const [config, setConfig] = useState({
    notification: localConfig?.notification || false,
    videoAutoplay: localConfig?.videoAutoplay || false,
  });
  const url = "https://www.linkedin.com/in/lucassaliba-/";
  const urlPrivacyPolicies ="https://www.linkedin.com/in/lucassaliba-/";

  localStorage.setItem(`localConfig-${idUser}`, JSON.stringify(config));

  const boxConfigLink = (hrefUrl, hrefTarget, msgText) => (
    <S.BoxConfig>
      <S.LinkPassword href={`${hrefUrl}`} target={hrefTarget}>
        <Flex justifyContent="space-between">
          <S.TextLink>{msgText}</S.TextLink>
          <S.ArrowLink />
        </Flex>
      </S.LinkPassword>
    </S.BoxConfig>
  );

  return (
    <Portal>
      <S.ConfigContainer flexDirection="column">
        <PageTitle title={intl.messages["menu.settings"]} />
        <Flex flexDirection="column" p={3} marginBottom="120px">
          <S.BoxConfig>
            <Flex flexDirection="row">
              <S.AvatarContainer>
                <Avatar size="100%" />
              </S.AvatarContainer>
              <S.TextContainer>
                <S.UserName>Lucas Saliba</S.UserName>
                <S.GoProfileLink
                  to={`${urls.ROUTES.PROFILE}/${idUser}`}
                  key={idUser}
                >
                  <S.GoProfile>
                    {intl.messages["settings.textPage.seeProfile"]}
                  </S.GoProfile>
                </S.GoProfileLink>
              </S.TextContainer>
            </Flex>
          </S.BoxConfig>
          <S.BoxConfig>
            <Flex justifyContent="space-between">
              <S.ContainerTextSwitch>
                <S.TextLink>
                 Receber novidades por e-mail
                </S.TextLink>
                <Switch
                  active={config.videoAutoplay}
                  onChange={() =>
                    setConfig({
                      ...config,
                      videoAutoplay: !config.videoAutoplay,
                    })
                  }
                />
              </S.ContainerTextSwitch>
            </Flex>
          </S.BoxConfig>
          {boxConfigLink(
            `${urls.ROUTES.CONFIGURATIONS}/como-baixar-o-app`,
            "_self",
            "Tutorial",
          )}
          {boxConfigLink(
            url,
            "_blank",
            intl.messages["settings.textPage.termsAndConditions"],
          )}
          {style.variables.hasPrivacyPolicies &&
            boxConfigLink(
              urlPrivacyPolicies,
              "_blank",
              intl.messages["settings.textPage.privacyPolicy"],
            )}
        </Flex>
      </S.ConfigContainer>
    </Portal>
  );
};

export default Configurations;
