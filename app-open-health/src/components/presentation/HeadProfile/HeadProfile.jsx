/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";
import { style } from "../../../style";
import { useIntl } from "react-intl";
import Popover from "react-bootstrap/Popover";
import urls from "../../../constants/urls";
import Avatar from "../../../components/core/Avatar/Avatar";
import { CoinsUser } from "../../../components/core/Coins/Coins";

import * as S from "./HeadProfileStyle";

const HeadProfile = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const changeDataPosition = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", changeDataPosition);
    return () => window.removeEventListener("resize", changeDataPosition);
  });

  const popoverProfile = (
    <Popover
      style={{
        borderRadius: 4,
        width: 304,
        minHeight: 277,
        border: "none",
        marginTop: 15,
        boxShadow:
          "0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)",
        zIndex: 1,
        backgroundColor: "white"
      }}
    >
      <S.UserDropdown>
          <>
            <Avatar size="84px" />
            <S.UserName>Lucas Saliba</S.UserName>
            <S.UserEmail>lucassaliba@pucminas.com.br</S.UserEmail>
          </>
          <>
            <Link to={urls.ROUTES.CONFIGURATIONS}>
            Configurações
            </Link>
            <Link
              to={urls.ROUTES.LOGIN}
            >
              <span>{intl.messages["general.buttons.exit"]}</span>
            </Link>
          </>
      </S.UserDropdown>
    </Popover>
  );

  return (
      <S.User>
        <OverlayTrigger
          rootClose
          trigger="click"
          placement="bottom"
          overlay={popoverProfile}
        >
          <S.ProfileOptions
            title={intl.messages["general.textPage.optionsOfUser"]}
          >
            <Avatar
              shadow
              size={isDesktop ? "32px" : "38px"}
            />
          </S.ProfileOptions>
        </OverlayTrigger>
        <S.UserNameAndCoins>
          <S.UserName>
            {intl.messages["profile.textPage.hello"]},
            Lucas Saliba!
          </S.UserName>
          <S.UserMessage>
            Você tem novos exames disponíveis!
          </S.UserMessage>
        </S.UserNameAndCoins>
      </S.User>
    )
  
};

export default HeadProfile;
