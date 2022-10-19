/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Flex from "../../core/Grid/Flex";
// import Menu from "../../presentation/Menu/Menu";
// import Search from "../../components/presentation/Search";
// import HeadProfile from "components/presentation/HeadProfile";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
import { style } from "../../../style";

import { ReactComponent as ArrowRight } from "../../../assets/icons/arrow-right.svg";
import { ReactComponent as BackIcon } from "../../../assets/icons/backIcon.svg";

// import { useCalendarContext } from "context/CalendarContexts";
import * as S from "./PortalStyle";

const Portal = ({
  children,
  sidebarContext,
  contextSearch,
  setRef,
  scrollRef,
  textBtnInSideBar = false
}) => {
  const intl = useIntl();
  const location = useLocation();
  const [show, setShow] = useState(null);
  const [searchShow, setSearchShow] = useState(null);
  const [scrollValue, setScrollValue] = useState(
    sessionStorage.getItem("muralScroll") || 0
  );
  const [showDetailsSideBar, setShowDetailsSideBar] = useState(false);
  //   const { sideBarDetails, setSideBarDetails } = useCalendarContext();

  //   useEffect(() => {
  //     if (sideBarDetails) setSideBarDetails(false);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  useEffect(
    () => {
      if (location.pathname === "/" && scrollRef) {
        setTimeout(() => {
          scrollRef.scroll({
            top: sessionStorage.getItem("muralScroll"),
            behavior: "instant"
          });
        }, 100);
      }
    },
    [location, scrollRef]
  );

  const handleScroll = e => {
    if (location.pathname === "/") {
      setScrollValue(e.target.scrollTop);
      sessionStorage.setItem("muralScroll", e.target.scrollTop);
    }
  };

  const scrollToTop = () => {
    scrollRef.scroll({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <S.GeneralContainer>
      <S.Template>
        {/* <Menu
          show={(showMenu) => setShow(showMenu)}
          search={(showSearch) => setSearchShow(showSearch)}
        /> */}
        {/* {contextSearch?.contextAction?.length > 0 && (
          <Search contextSearch={contextSearch} />
        )} */}
        {/* <HeadProfile /> */}
        <S.MainContent
          show={show}
          ref={ref => setRef && setRef(ref)}
          sidebarContext={sidebarContext}
          onScroll={handleScroll}
        >
          <Flex flexDirection="column">
            <S.FlexComponentPortal>
              {!show &&
                textBtnInSideBar &&
                <S.ButtonInSideBar
                  onClick={() => setShowDetailsSideBar(true)}
                  type="button"
                >
                  {textBtnInSideBar}
                  <ArrowRight />
                </S.ButtonInSideBar>}
            </S.FlexComponentPortal>
            {children}
          </Flex>
          {location.pathname === "/" &&
            <S.ScrollTopButton onClick={scrollToTop} show={scrollValue > 0}>
              {intl.messages["general.buttons.backToTop"]}
            </S.ScrollTopButton>}
        </S.MainContent>
        {sidebarContext &&
          <S.Sidebar>
            {!show &&
              showDetailsSideBar &&
              <S.ContainerOutSideBar>
                <S.ButtonOutSideBar
                  onClick={() => {
                    setShowDetailsSideBar(false);
                    // setSideBarDetails(false);
                  }}
                  type="button"
                >
                  <BackIcon />
                </S.ButtonOutSideBar>
              </S.ContainerOutSideBar>}
            {sidebarContext}
          </S.Sidebar>}
      </S.Template>
    </S.GeneralContainer>
  );
};

Portal.defaultProps = {
  contextSearch: {
    contextName: "",
    contextAction: "",
    contextTags: []
  },
  children: {}
};

Portal.propTypes = {
  children: PropTypes.node,
  sidebarContext: PropTypes.element,
  contextSearch: PropTypes.object,
  setRef: PropTypes.func,
  PageTitleContentMain: PropTypes.string
};

export default Portal;
