import styled from "styled-components";
import css from "@styled-system/css";
import theme from "../../../styles/theme";
import { compose, variant, space } from "styled-system";

export const ThemedButton = styled("button")(
  compose(space),
  css({
    fontSize: 1,
    border: "none",
    color: "white",
    display: "flex",
    fontWeight: 300,
    outline: "none",
    cursor: "pointer",
    minWidth: "110px",
    bg: "secondaryColor",
    fontFamily: "text",
    borderRadius: "4px",
    padding: "8px 25px",
    textAlign: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    justifyContent: "center",
    textTransform: "uppercase",

    "@media (max-width: 405px)": {
      maxWidth: "150px"
    },

    "&: hover": {
      bg: "primaryColor"
    },
    "> svg": {
      marginRight: 2,
      path: {
        "stroke-width": "2px",
        "stroke-linecap": "round"
      }
    }
  }),
  variant({
    variants: {
      small: {
        fontSize: 0,
        minWidth: "auto",
        padding: "5px 16px"
      },
      medium: {
        fontSize: 1,
        minWidth: "auto",
        padding: "6px 20px"
      },
      big: {
        fontSize: 2,
        minWidth: "180px",
        padding: "13px 40px"
      },
      round: {
        borderRadius: 30
      },
      gradient: {
        background: ({
          colors: { primaryColor, secondaryColor }
        }) => `linear-gradient(
      35deg,
      ${primaryColor},
      ${secondaryColor} 100%
     )`,
        "&:hover": {
          border: "none",
          color: "white",
          background: ({
            colors: { primaryColor, secondaryColor }
          }) => `linear-gradient(
       256deg,
       ${primaryColor},
       ${secondaryColor} 100%
      )`
        }
      },
      completed: {
        backgroundColor: "greenDark",
        "&:hover": {
          bg: "#1B9B10"
        }
      },
      inProgress: {
        backgroundColor: "blue",
        "&:hover": {
          bg: "#114695"
        }
      },
      completedTransparent: {
        background: "none",
        color: "greenDark",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "focusInput"
        }
      },
      inProgressTransparent: {
        background: "none",
        color: "blue",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "focusInput"
        }
      },
      disabled: {
        border: "none",
        background: "none",
        cursor: "not-allowed",
        color: "rgba(0, 0, 0, .2)",
        backgroundColor: "grayDefaultColor",
        "&:hover": {
          border: "none",
          background: "none",
          bg: "grayDefaultColor",
          color: "rgba(0, 0, 0, 0.2)"
        },
        "svg path": {
          stroke: "rgba(0, 0, 0, 0.2)"
        }
      },
      transparent: {
        background: "none",
        color: "primaryColor",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "focusInput"
        }
      }
    }
  })
);

export const Loading = styled("span")(
  css({
    width: 20,
    height: 20,
    borderRadius: "50%",
    border: "4px solid white",
    borderTop: `4px solid ${theme.colors.yellow}`,
    animation: "spin 2s linear infinite",
    "@keyframes spin": {
      "0%": {
        transform: "rotate(0deg)"
      },
      "100%": {
        transform: "rotate(360deg)"
      }
    }
  })
);
