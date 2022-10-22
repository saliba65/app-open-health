/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";
import { style } from "../../../style";
import { useIntl } from "react-intl";
import Popover from "react-bootstrap/Popover";
import Flex from "../../core/Grid/Flex";
import urls from "utils/constants/urls";
import Avatar from "components/core/Avatar/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";
import { CoinsUser } from "components/core/Coins/Coins";
import { Creators as ModalAlertActions } from "store/ducks/modalAlert";
import { Creators as NotificationsActions } from "store/ducks/notifications";
import { Creators as UserActions } from "store/ducks/user";
import { ReactComponent as IconNotifications } from "assets/img/icons/notification.svg";
import {
  smartFormatterDateNotifications,
  linkNotification,
  history,
} from "helpers/sharedHelpers";
import * as S from "./HeadProfileStyle";
import SkeletonNotifications from "./SkeletonNotifications";

const HeadProfile = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [itensNotications, setItensNotifications] = useState([]);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const changeDataPosition = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", changeDataPosition);
    return () => window.removeEventListener("resize", changeDataPosition);
  });

  const { notifications, isLoading: isLoadingNotifications } = useSelector(
    (state) => state.notifications,
  );
  const { user, notViewdNotifications, isLoading } = useSelector(
    (state) => state.user,
  );
  const dispatchGetUserRequest = useCallback(
    () => dispatch(UserActions.getUserRequest()),
    [dispatch],
  );

  useEffect(() => {
    setItensNotifications(notifications.filter((_, index) => index <= 2));
  }, [notifications]);

  useEffect(() => {
    dispatchGetUserRequest();
  }, [dispatchGetUserRequest]);

  const ViewAllNotifications = () => {
    history.push(urls.ROUTES.MY_NOTIFICATIONS);
  };

  const confirm = () => {
    dispatch(
      ModalAlertActions.setAlertsRequest({
        title: intl.messages["general.buttons.doYouWantToLeave"],
        buttons: [
          {
            title: intl.messages["general.buttons.cancel"],
            variant: ["transparent"],
          },
          {
            title: intl.messages["general.buttons.exit"],
            event: () => history.push(urls.ROUTES.LOGOUT),
          },
        ],
      }),
    );
  };

  const popoverNotifications = (
    <Popover
      style={{
        borderRadius: 4,
        width: 304,
        border: "none",
        marginTop: 15,
        boxShadow:
          "0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)",
      }}
    >
      <S.NotificationsTitleDate>
        {intl.messages["myNotifications.textPage.notifications"]}
      </S.NotificationsTitleDate>
      {isLoadingNotifications ? (
        <SkeletonNotifications />
      ) : itensNotications.length > 0 ? (
        <>
          <S.Notifications>
            {itensNotications.map((notification) => {
              const {
                title,
                idelement,
                created_at,
                notified,
                kind,
                canvas_publication_id,
              } = notification;
              return (
                <Link
                  to={linkNotification({
                    kind,
                    idelement,
                    title,
                    canvas_publication_id,
                  })}
                  key={idelement}
                  title={`${intl.messages["general.textPage.clickToGoToContant"]}`}
                >
                  <Flex justifyContent="space-between">
                    <Flex flexDirection="column">
                      <S.NotificationNew>{title}</S.NotificationNew>
                      <S.NotificationsTitleDate>
                        {smartFormatterDateNotifications(created_at, "LLL")}
                      </S.NotificationsTitleDate>
                    </Flex>
                    {!notified && <S.NotificationCircle />}
                  </Flex>
                </Link>
              );
            })}
          </S.Notifications>
          <S.ViewAll
            title={intl.messages["general.buttons.goListNotifications"]}
            onClick={() => ViewAllNotifications()}
          >
            {intl.messages["general.buttons.viewAll"]}
          </S.ViewAll>
        </>
      ) : (
        <Flex>
          <S.NotificationNew>
            {intl.messages["myNotifications.textPage.notNotifications"]}
          </S.NotificationNew>
        </Flex>
      )}
    </Popover>
  );

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
      }}
    >
      <S.UserDropdown>
        {!isLoading && (
          <>
            <Avatar size="84px" url={user?.image?.thumb?.url} />
            <S.UserName>{user.name}</S.UserName>
            <S.UserEmail>{user.email}</S.UserEmail>
          </>
        )}
        {localStorage.getItem("roles") !== "guest" && (
          <>
            <Link to={urls.ROUTES.EDIT_PROFILE}>
              {intl.messages["general.buttons.editProfile"]}
            </Link>
            <Link
              logout
              onClick={() => confirm()}
              title={intl.messages["general.buttons.exit"]}
            >
              <span>{intl.messages["general.buttons.exit"]}</span>
            </Link>
          </>
        )}
      </S.UserDropdown>
    </Popover>
  );

  return (
    !isLoading && (
      <S.User>
        <OverlayTrigger
          rootClose
          trigger="click"
          placement="bottom"
          overlay={popoverNotifications}
        >
          <S.ProfileNotifications
            title={intl.messages["myNotifications.textPage.notifications"]}
            onClick={() => dispatch(NotificationsActions.getNotifications())}
          >
            <IconNotifications />
            <S.ShowNotifications unviewdNotifications={notViewdNotifications} />
          </S.ProfileNotifications>
        </OverlayTrigger>
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
              url={user?.image?.url}
              size={isDesktop ? "32px" : "38px"}
            />
          </S.ProfileOptions>
        </OverlayTrigger>
        <S.UserNameAndCoins>
          <S.UserName>
            {intl.messages["profile.textPage.hello"]},{" "}
            {user?.name?.split(" ")[0]}!
          </S.UserName>
          {style.variables.gamificationEnabled &&
            localStorage.getItem("roles") !== "guest" && (
              <CoinsUser
                coinsName="general.textPage.nameCoins"
                score={user.score}
              />
            )}
        </S.UserNameAndCoins>
      </S.User>
    )
  );
};

export default HeadProfile;
