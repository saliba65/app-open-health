import styled from "styled-components";
import css from "@styled-system/css";
import theme from "../../../styles/theme";

export const GeneralContainer = styled("div")(
  css({
    width: "100vw",
    display: "flex",
    flexDirection: "column"
  })
);

export const Template = styled("div")(
  css({
    width: "100vw",
    height: "100vh",
    display: "grid",
    position: "fixed",
    backgroundAttachment: "fixed",
    gridTemplateRows: "72px auto",
    gridTemplateColumns: "328px auto 348px",
    background: theme.colors.tertiaryColor
      ? `linear-gradient(
        43.93deg, ${theme.colors.primaryColor} 2.96%,
        ${theme.colors.secondaryColor} 28.23%,
        ${theme.colors.tertiaryColor} 87.87%
      )`
      : `linear-gradient(
        35deg,
        ${theme.colors.primaryColor},
        ${theme.colors.secondaryColor} 100%
        )`,
    gridTemplateAreas: '"nav search user" "nav main side"',

    "@media (max-width: 768px)": {
      gridTemplateColumns: "auto 100% auto"
    },
    "@media (min-width: 769px) and (max-width: 1024px)": {
      gridTemplateColumns: "20vw 40vw 40vw",
      gridTemplateAreas: '"nav user user" "main main side"'
    }
  })
);

export const MainContent = styled("section")(
  css({
    flex: 1,
    display: "flex",
    gridArea: "main",
    overflowY: "auto",
    overflowX: "hidden",
    backgroundColor: "white",
    justifyContent: "center",
    borderTopLeftRadius: "24px",
    height: "100%",

    "@media (max-width: 539px)": {
      height: `${window.innerHeight}`
    },

    "> :first-child": {
      width: "100%",
      display: "flex",
      background: "white",
      borderTopLeftRadius: "24px"
    }
  }),
  ({ sidebarContext }) =>
    !sidebarContext &&
    css({
      gridColumn: "2 / 4"
    }),
  ({ show }) =>
    show
      ? css({
          "@media (min-width:769px) and (max-width: 1024px)": {
            animation: "portal 0.3s ease-in-out",
            marginLeft: 254,
            "@keyframes portal": {
              from: {
                marginLeft: 0
              },

              to: {
                marginLeft: "254px"
              }
            }
          },
          "@media (max-width: 768px)": {
            animation: "portal 0.3s ease-in-out",
            marginLeft: "90%",
            "@keyframes portal": {
              from: {
                marginLeft: 0
              },

              to: {
                marginLeft: "90%"
              }
            }
          }
        })
      : show !== null &&
        css({
          "@media (max-width: 1024px)": {
            animation: "portalout 0.4s ease-in-out",
            "@keyframes portalout": {
              from: {
                marginLeft: 254
              },

              to: {
                marginLeft: 0
              }
            }
          }
        })
);

export const Sidebar = styled("section")(
  css({
    flex: 1,
    overflow: "auto",
    display: "flex",
    gridArea: "side",
    flexDirection: "column",
    backgroundColor: "white",
    borderLeft: `solid 1.3px ${theme.colors.grayDefaultColor}`
  })
);

export const PortalHeader = styled("div")(
  css({
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  })
);

export const Icon = styled("img")(
  css({
    width: "20px",
    height: "20px",
    display: "none"
  })
);

export const SideBarContent = styled("div")(
  css({
    backgroundColor: "white",
    borderTopLeftRadius: "24px"
  })
);

export const FlexComponentPortal = styled("div")(
  css({
    width: "100%",
    height: "0",
    display: "flex",
    justifyContent: "flex-end"
  })
);

export const ButtonInSideBar = styled("button")(
  css({
    visibility: "hidden",
    "@media (max-width: 1024px)": {
      position: "absolute",
      right: "1",
      top: "18px",
      zIndex: "1",
      border: "none",
      fontSize: "14px",
      cursor: "pointer",
      color: "backText",
      fontFamily: "text",
      borderRadius: "8px",
      alignItems: "center",
      visibility: "visible",
      padding: "5px 3px 5px 14px",
      backgroundColor: `${theme.fonts.paleGrey}`,
      "svg path": {
        stroke: "charcoalGrey"
      },
      ":hover, :focus": {
        opacity: "0.8",
        color: "secondaryColor",
        "svg path": {
          stroke: "secondaryColor"
        }
      }
    }
  })
);

export const ContainerOutSideBar = styled("div")(
  css({
    height: 0,
    visibility: "hidden",
    "@media (max-width: 1024px)": {
      display: "flex",
      position: "relative",
      visibility: "visible",
      flexDirection: "column"
    }
  })
);

export const ButtonOutSideBar = styled("button")(
  css({
    visibility: "hidden",
    "@media (max-width: 1024px)": {
      position: "absolute",
      right: "1",
      top: "18px",
      zIndex: "1",
      border: "none",
      cursor: "pointer",
      color: "backText",
      alignItems: "center",
      borderRadius: "100%",
      visibility: "visible",
      svg: {
        width: "20px",
        height: "20px"
      },
      "svg path": {
        stroke: `${theme.fonts.paleGrey}`
      },
      ":hover, :focus": {
        opacity: "0.8",
        color: "secondaryColor",
        "svg path": {
          stroke: "secondaryColor"
        }
      }
    }
  })
);

export const ScrollTopButton = styled("button")(
  css({
    display: "flex",
    alignItems: "center",
    border: "none",
    height: "36px",
    padding: "14px",
    borderRadius: "24px",
    position: "absolute",
    bottom: "12px",
    zIndex: "2",
    color: "white",
    fontFamily: `${theme.fonts.textLight}`,
    background: `${theme.colors.secondaryColor}`,
    transition: "padding 0.2s, height 0.2s, opacity 0.3s ease-in-out",
    ":hover": {
      padding: "16px",
      height: "38px",
      cursor: "pointer"
    },
    "@media (min-width: 1024px)": {
      right: "364px"
    },
    "@media (max-width: 1024px)": {
      bottom: "48px"
    }
  }),
  ({ show }) => (show ? css({ opacity: 1 }) : css({ opacity: 0, zIndex: -1 }))
);
