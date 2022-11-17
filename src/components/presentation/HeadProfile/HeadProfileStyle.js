import styled from "styled-components";
import css from "@styled-system/css";
import theme from "../../../styles/theme";
import Flex from "../../core/Grid/Flex";

export const Notifications = styled(Flex)(
  css({
    flexDirection: "column",
    "h4, h3": {
      p: "0 16px"
    },
    a: {
      marginBottom: 3,
      alignItems: "baseline",
      textDecoration: "none",
      borderBottom: `0.5px solid ${theme.colors.grayDefaultColor}`
    }
  })
);

export const NotificationCircle = styled("div")(
  css({
    width: 10,
    height: 10,
    marginRight: 3,
    borderRadius: 40,
    border: "4px solid rgba(80, 31, 153, 0.1)",
    boxShadow: "0px 0px 1px 4px rgba(0, 0, 0, 0.2)",
    backgroundColor: `${theme.colors.primaryColor}`
  })
);

export const NotificationNew = styled("h3")(
  css({
    fontSize: 2,
    fontWeight: "500",
    color: `${theme.colors.backText}`,
    fontFamily: `${theme.fonts.heading}`
  })
);

export const NotificationsTitleDate = styled("h4")(
  css({
    p: 3,
    fontSize: 0,
    textTransform: "uppercase",
    color: `${theme.colors.labelColor}`,
    fontFamily: `${theme.fonts.heading}`
  })
);

export const ProfileOptions = styled(Flex)(
  css({
    marginRight: 3,
    ":hover": {
      cursor: "pointer",
      opacity: 0.6
    }
  })
);

export const ProfileNotifications = styled("div")(
  css({
    marginRight: 3,
    position: "relative",
    ":hover": {
      opacity: 0.6,
      cursor: "pointer"
    },
    "@media (max-width: 1024px)": {
      display: "none"
    }
  })
);

export const ShowNotifications = styled("div")(
  css({
    right: 0,
    width: 8,
    bottom: 0,
    height: 8,
    content: "",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "content-box",
    backgroundColor: "yellow",
    border: `2px solid ${theme.colors.secondaryColor}`
  }),
  ({ unviewdNotifications }) =>
    !unviewdNotifications &&
    css({
      visibility: "hidden"
    })
);

export const User = styled("section")(
  css({
    margin: 3,
    display: "flex",
    gridArea: "user",
    alignItems: "center",
    justifyContent: "flex-end",
    "@media (max-width: 1024px)": {
      margin: "16px 16px 32px 16px",
      justifyContent: "flex-start"
    }
  })
);

export const UserDropdown = styled(Flex)(
  css({
    paddingTop: 3,
    alignItems: "center",
    flexDirection: "column",
    img: {
      marginBottom: 2
    },
    h3: {
      marginBottom: 0,
      color: `${theme.colors.blackLight}`
    },
    a: {
      padding: 3,
      fontSize: 2,
      width: "100%",
      transition: "1s",
      textDecoration: "none",
      fontFamily: `${theme.fonts.textLight}`,
      color: `${theme.colors.blackLight} !important`,
      borderTop: `0.5px solid ${theme.colors.grayDefaultColor}`,
      ":hover": {
        cursor: "pointer",
        backgroundColor: `${theme.colors.grayDefaultColor}`
      },
      span: {
        color: `${theme.colors.redLight} !important`
      }
    }
  })
);

export const UserEmail = styled("h4")(
  css({
    fontSize: 2,
    marginBottom: 3,
    color: `${theme.colors.blackLight}`,
    fontFamily: `${theme.fonts.textLight}`
  })
);

export const UserName = styled("h3")(
  css({
    fontSize: 2,
    marginBottom: "2px",
    color: "white",
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "1",
    "-webkit-box-orient": "vertical",
    fontFamily: `${theme.fonts.heading}`,
    fontWeight: "normal",
    "@media (max-width: 1024px)": {
      fontSize: "17px",
      marginBottom: "5px"
    }
  })
);

export const UserMessage = styled("span")(
  css({
    fontSize: 1,
    marginBottom: "2px",
    color: "white",
    opacity: "0.75",
    overflow: "hidden",
    display: "-webkit-box",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": "1",
    "-webkit-box-orient": "vertical",
    fontFamily: `${theme.fonts.heading}`,
    fontWeight: "normal",
    "@media (max-width: 1024px)": {
      fontSize: "17px",
      marginBottom: "5px"
    }
  })
);

export const UserNameAndCoins = styled(Flex)(
  css({
    flexDirection: "column",
    alignItems: "flex-start"
  })
);

export const ViewAll = styled("h3")(
  css({
    m: 0,
    p: 3,
    fontSize: 0,
    textAlign: "center",
    textTransform: "uppercase",
    color: `${theme.colors.labelColor}`,
    backgroundColor: `${theme.colors.focusInput}`,
    ":hover": {
      cursor: "pointer"
    }
  })
);
