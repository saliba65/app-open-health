import { Link } from "react-router-dom";
import styled from "styled-components";
import css from "@styled-system/css";
import theme from "../../../styles/theme";
import Flex from "../../core/Grid/Flex";

export const ContainerMenu = styled(Flex)(
  css({
    width: "100%",
    height: "100%",
    gridArea: "nav",
    overflow: "hidden",
    alignItems: "center",
    justifyItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    "@media (max-width: 1024px)": {
      margin: 3,
      width: "auto",
      flexDirection: "row",
      justifyContent: "space-between"
    }
  })
);

export const Icon = styled("img")(
  css({
    display: "none",
    "@media (max-width: 1024px)": {
      width: 32,
      display: "block",
      cursor: "pointer"
    }
  })
);

export const ProfileNotifications = styled("div")(
  css({
    display: "none",
    "@media (max-width: 1024px)": {
      display: "block",
      position: "relative",
      ":hover": {
        opacity: 0.6,
        cursor: "pointer"
      },
      svg: {
        width: 32
      }
    }
  }),
  ({ unviewdNotifications }) =>
    unviewdNotifications &&
    css({
      ":before": {
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
      }
    })
);

export const IconOption = styled("img")(
  css({
    width: 28,
    maxWidth: 28,
    maxHeight: 24,
    marginRight: 10
  })
);

export const ItensMenu = styled(Flex)(
  css({
    width: "100%",
    height: "100%",
    padding: "0 32px 0 20px",
    overflow: "scroll",
    flexDirection: "column",
    "::-webkit-scrollbar": {
      width: "0px"
    },
    a: {
      textDecoration: "none"
    },
    "@media (max-width: 1024px)": {
      display: "none"
    }
  })
);

export const ItensMobile = styled(Flex)(
  css({
    visibility: "hidden",
    height: 0,
    "@media (max-width: 1024px)": {
      top: 154,
      left: -254,
      zIndex: 1,
      height: "100vh",
      position: "fixed",
      flexDirection: "column",
      padding: "20px 32px 20px 20px",
      overflowY: "scroll",
      "::-webkit-scrollbar": {
        width: "0px"
      },
      a: {
        textDecoration: "none"
      },
      "@media (max-height: 700px)": {
        height: "350px"
      },
      "@media (min-height: 601px) and (max-height: 700px)": {
        height: "400px"
      }
    }
  }),
  ({ show }) =>
    show
      ? css({
          visibility: "visible",
          "@media (max-width: 768px)": {
            width: "90%"
          },
          "@media (max-width: 1024px)": {
            animation: "slidein 0.6s ease-in-out",
            left: 0,
            "@media (max-width: 320px)": {
              padding: "0 17px"
            },
            "@keyframes slidein": {
              from: {
                left: -350
              },

              to: {
                left: 0
              }
            }
          }
        })
      : show !== null &&
        css({
          visibility: "hidden",
          "@media (max-width: 1024px)": {
            animation: "slideout 0.4s ease-in-out",
            "@keyframes slideout": {
              from: {
                left: 0
              },

              to: {
                left: -254
              }
            }
          }
        }),
  ({ isPardini }) =>
    isPardini &&
    css({
      "@media (max-width: 1024px)": {
        height: "60vh",
        top: 200,
        padding: "20px 32px 20px 35px"
      }
    })
);

export const LinkLogo = styled(Link)(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    img: {
      width: "150px",
      margin: "30px 0 30px 0px",
      "@media (max-width: 1024px)": {
        maxWidth: "85px",
        margin: 0
      }
    }
  }),
  ({ isPardini }) =>
    isPardini &&
    css({
      img: {
        height: "100px",
        "@media(max-width: 1024px)": {
          maxWidth: "56px",
          margin: "20px 130px 22px 0px"
        }
      }
    }),
  ({ backMenu }) =>
    backMenu &&
    css({
      display: "none"
    })
);

export const Logo = styled("img")(
  css({
    maxWidth: 133,
    margin: "20px 0 22px 0",
    "@media (max-width: 1024px)": {
      margin: 0
    }
  })
);

export const OptionMenu = styled(Flex)(
  css({
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    marginBottom: 2,
    padding: 12,
    height: 40,
    alignItems: "center",
    borderRadius: 4,
    color: "white",
    fontFamily: `${theme.fonts.heading}`,
    fontSize: 16,
    ":hover": {
      backgroundColor: "rgba(189, 189, 189, 0.32)",
      cursor: "pointer"
    }
  }),
  ({ IndicateTheMenu }) =>
    IndicateTheMenu &&
    css({
      backgroundColor: "rgba(189, 189, 189, 0.1)"
    })
);

export const ContentLogoComunication = styled("div")(
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    svg: {
      width: "170px",
      height: "45px"
    },
    "@media (max-width: 1024px)": {
      display: "none"
    }
  }),
  ({ show }) =>
    show &&
    css({
      display: "none"
    })
);
