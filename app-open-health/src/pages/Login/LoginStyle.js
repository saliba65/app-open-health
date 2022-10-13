import styled from "styled-components";
import css from "@styled-system/css";
import Flex from "../../components/core/Grid/Flex";
import { Link } from "react-router-dom";

export const BoxForgetPassword = styled("div")(
  css({
    fontSize: "1em",
    cursor: "pointer",
    fontFamily: "text",
    textAlign: "right",
    alignSelf: "flex-end",
    a: {
      textDecoration: "none",
      color: "inherit"
    },
    ":hover": {
      opacity: 0.7
    }
  })
);

export const BoxRememberMe = styled("label")(
  css({
    display: "flex",
    marginTop: "14px",
    alignItems: "center",
    justifyItems: "center",
    "input[type='checkbox']": {
      width: "22px",
      height: "22px",
      borderWidth: "1px"
    },
    label: {
      fontSize: 1
    },
    svg: {
      left: "2px"
    }
  })
);

export const LoginContainer = styled("section")(
  css({
    position: "relative",
    display: "flex",
    margin: "0 auto",
    flex: "0 1 1160px",
    alignItems: "center",
    justifyItems: "center",
    "@media (max-width: 767px)": {
      width: "100%",
      height: "100%",
      flexDirection: "column"
    }
  })
);

export const LoginForm = styled(Flex)(
  css({
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    "@media (max-width: 767px)": {
      flex: "none",
      width: "100%",
      height: "65%",
      paddingTop: 32
    }
  })
);

export const Form = styled("form")(
  css({
    width: "70%",
    display: "flex",
    flexDirection: "column"
  })
);

export const ForgetPassword = styled("div")(
  css({
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "80%",
    h1: {
      width: "auto"
    },
    h2: {
      width: "380px",
      textAlign: "center"
    },
    "@media (max-width: 767px)": {
      flex: "none",
      width: "100%",
      paddingTop: 32,
      maxHeight: "60%",
      "@media (max-width: 380px)": {
        padding: 0
      }
    }
  })
);

export const ContainerArrowLeft = styled("div")(
  css({
    visibility: "hidden",
    position: "absolute",
    top: "120px",
    zIndex: "1",
    left: "45px",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    color: "backText",
    fontFamily: "text",
    borderRadius: "100px",
    alignItems: "center",
    padding: "14px",
    backgroundColor: "paleGrey",
    transition: "1s",
    "svg path": {
      stroke: "charcoalGrey"
    },
    ":hover, :focus": {
      opacity: 0.7,
      color: "secondaryColor",
      "svg path": {
        stroke: "secondaryColor"
      }
    },
    "@media (max-width: 767px)": {
      top: "5px",
      left: "5px"
    }
  }),
  ({ showArrowLeft }) =>
    showArrowLeft &&
    css({
      visibility: "visible"
    })
);

export const LogoCompany = styled(Flex)(
  css({
    flex: 1,
    padding: "5vh",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #ccc",
    img: {
      maxWidth: "100%"
    },
    "> svg": {
      width: "90%"
    },
    "@media (max-width: 767px)": {
      flex: "none",
      position: "relative",
      marginTop: "30px",
      padding: 0,
      width: "100%",
      height: "35%",
      display: "flex",
      borderRight: "none",
      alignItems: "center",
      justifyContent: "center",
      img: {
        maxWidth: "80%",
        maxHeight: "80%"
      },
      "> svg": {
        height: "90%"
      },
      "@media (max-width: 380px)": {
        height: "25%"
      }
    },
    "@media (min-width: 768px) and (max-width: 1024px)": {
      img: {
        maxWidth: "90%",
        maxHeight: "90%"
      }
    }
  })
);

export const SubTitle = styled("h2")(
  css({
    mb: 4,
    fontSize: 18,
    color: "backText",
    fontFamily: "textLight"
  })
);

export const BoxSignUp = styled("div")(
  css({
    width: "100%",
    display: "flex",
    marginTop: "32px",
    alignItems: "center",
    justifyContent: "center"
  })
);

export const LinkSignUp = styled(Link)(
  css({
    fontSize: "14px",
    transition: "1s",
    lineHeight: "20px",
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: "normal",
    color: "secondaryColor",
    letterSpacing: "0.5px",
    textTransform: "uppercase",

    ":hover": {
      opacity: 0.7,
      color: "secondaryColor",
      textDecoration: "none"
    }
  })
);
