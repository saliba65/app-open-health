import styled from "styled-components";
import css from "@styled-system/css";
import theme from "../../styles/theme";
import Flex from "../../components/core/Grid/Flex";
import { Link } from "react-router-dom";

export const ConfigContainer = styled(Flex)(
  css({
    height: "100vh"
  })
);

export const ArrowLink = styled("span")(
  css({
    mt: "7px",
    width: "0.6em",
    height: "0.6em",
    display: "inline-block",
    transform: "rotate(-45deg)",
    borderRight: `0.1em solid ${theme.colors.labelColor}`,
    borderBottom: `0.1em solid ${theme.colors.labelColor}`
  })
);

export const BorderBottom = styled("div")(
  css({
    pb: "12px",
    m: "0 -12px 12px -12px",
    borderBottom: `1px solid ${theme.colors.grayDefaultColor}`
  })
);

export const BoxConfig = styled(Flex)(
  css({
    p: 12,
    mb: 12,
    borderRadius: 8,
    flexDirection: "column",
    maxWidth: "100%",
    backgroundColor: `${theme.colors.focusInput}`,
    "@media(min-width: 765px)": {
      maxWidth: "480px"
    }
  }),
  ({ isDashboard }) => isDashboard && css({ marginRight: "25px" })
);

export const AvatarContainer = styled("div")(
  css({
    width: "120px",
    height: "120px",
    "@media (max-width: 320px)": {
      width: "80px",
      height: "80px"
    },

    "@media (min-width: 321px) and (max-width: 376px)": {
      width: "90px",
      height: "90px"
    },

    "@media (min-width: 376px) and (max-width: 412px)": {
      width: "100px",
      height: "100px"
    },

    "@media (min-width: 412px)": {
      width: "120px",
      height: "120px"
    }
  })
);

export const TextContainer = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 0 0px 15px"
  })
);

export const UserName = styled("h3")(
  css({
    fontSize: "20px",
    fontFamily: "heading",
    fontWeight: "600",
    lineHeight: "28px",
    marginBottom: 0
  })
);

export const GoProfileLink = styled(Link)(
  css({
    display: "flex",
    border: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "secondaryColor",
    ":hover": {
      textDecoration: "underline",
      color: "primaryColor"
    }
  })
);

export const GoProfile = styled("h4")(
  css({
    fontSize: "16px",
    color: "secondaryColor",
    fontFamily: "heading",
    fontWeight: "300",
    lineHeight: "24px",
    marginBottom: 0,
    ":hover": {
      color: "primaryColor"
    }
  })
);

export const ContainerTextSwitch = styled("div")(
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 320px)": {
      width: "100%",
      alignItems: "start",
      flexDirection: "column"
    }
  })
);

export const LinkPassword = styled("a")(
  css({
    textDecoration: "none !important"
  })
);

export const TextLink = styled("h3")(
  css({
    fontSize: 2,
    lineHeight: "24px",
    color: `${theme.colors.textConfig}`,
    fontFamily: `${theme.fonts.textLight}`
  }),
  ({ isDashboard }) => isDashboard && css({ marginRight: "20px" })
);

export const TokenText = styled(TextLink)(
  css({
    marginTop: "16px",
    background: "white",
    padding: "6px 10px",
    borderRadius: "8px",
    overflowWrap: "anywhere"
  })
);

export const GenerateTokenRow = styled("div")(
  css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  })
);
