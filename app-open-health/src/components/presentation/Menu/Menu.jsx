/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useIntl } from "react-intl";
import { style } from "../../../style";

import logoMenu from "../../../assets/img/logoMenu.png";
import MuralIcons from "../../../assets/icons/muralIcons.svg";
import EventsIcons from "../../../assets/icons/eventsIcons.svg";
import ArquivesIcons from "../../../assets/icons/arquivesIcons.svg";
import ConfigurationsIcons from "../../../assets/icons/configurationsIcons.svg";
import SunIcons from "../../../assets/icons/sunIcon.svg";
import AboutUs from "../../../assets/icons/aboutUs.svg";
import { urlsFunction } from "../../../constants/urls";

import * as T from "./MenuStyle";

const renderIcon = nameIcon => {
  switch (nameIcon) {
    case "Home":
      return MuralIcons;
    case "AboutUs":
      return AboutUs;
    case "EventsIcons":
      return EventsIcons;
    case "ExamesIcons":
      return ArquivesIcons;
    case "ConfigurationsIcons":
      return ConfigurationsIcons;
    default:
      return SunIcons;
  }
};

const Menu = ({ show, search }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(null);
  const location = useLocation();

  const renderLabel = id => intl.messages[`menu.${id}`];

  useEffect(
    () => {
      if (showMenu !== null) {
        show(showMenu);
      }
    },
    [show, showMenu]
  );

  const renderMenu = () =>
    Object.keys(urlsFunction.ROUTES_MENU).map(
      route =>
        urlsFunction.ROUTES_MENU[route].showMenu &&
        <Link
          title={`${intl.messages[`general.textPage.goTo`]} ${renderLabel(
            urlsFunction.ROUTES_MENU[route].name
          )}`}
          false
          key={urlsFunction.ROUTES_MENU[route].id}
          to={urlsFunction.ROUTES_MENU[route].patch}
        >
          <T.OptionMenu
            IndicateTheMenu={
              urlsFunction.ROUTES_MENU[route].patch === location.pathname
            }
          >
            <T.IconOption
              src={renderIcon(urlsFunction.ROUTES_MENU[route].nameIcon)}
            />
            {renderLabel(urlsFunction.ROUTES_MENU[route].name)}
          </T.OptionMenu>
        </Link>
    );

  return (
    <T.ContainerMenu>
      <T.LinkLogo
        backMenu={showMenu}
        to="/"
        title={intl.messages[`general.textPage.returnToHome`]}
      >
        <img alt="Logo" src={style.icons.menuIcon || logoMenu} />
      </T.LinkLogo>
      {urlsFunction &&
        <T.ItensMenu>
          {renderMenu()}
        </T.ItensMenu>}
    </T.ContainerMenu>
  );
};

export default Menu;
