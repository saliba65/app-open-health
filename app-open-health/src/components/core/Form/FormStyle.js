import styled from "styled-components";
import theme from "../../../styles/theme";
import css from "@styled-system/css";
import { variant, typography } from "styled-system";
import InputMask from "react-input-mask";

import IconFacebook from "../../../assets/icons/facebook.svg";
import IconTwitter from "../../../assets/icons/twitter.svg";
import IconLinkedin from "../../../assets/icons/linkedin.svg";
import IconInstagram from "../../../assets/icons/instagram.svg";
import IconArrow from "../../../assets/icons/arrow-bottom.svg";

const icons = {
  facebook: `url(${IconFacebook})`,
  twitter: `url(${IconTwitter})`,
  linkedin: `url(${IconLinkedin})`,
  instagram: `url(${IconInstagram})`,
  arrowBottom: `url(${IconArrow})`
};

export const InputLabel = styled("label")(
  css({
    fontSize: 0,
    color: "labelColor",
    marginBottom: 0,
    userSelect: "none"
  }),
  ({ isPersonalQuestion }) =>
    isPersonalQuestion &&
    css({
      textTransform: "uppercase"
    }),
  variant({
    variants: {
      inline: {
        display: "flex",
        alignItems: "center"
      },
      focused: {
        color: "secondaryColor"
      }
    }
  }),
  typography
);

export const InputStyle = styled("input")(
  css({
    width: "100%",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "1px solid",
    borderLeft: "none",
    borderColor: "grayDefaultColor",
    caretColor: theme.colors.secondaryColor,
    fontFamily: "text",
    bg: "focusInput",
    color: "textInput",
    borderRadius: "8px 8px 0 0",
    padding: "8px 12px",
    fontSize: 2,
    lineHeight: "24px",
    "::placeholder": {
      color: "grayDefaultColor"
    },
    "&:hover, &:focus": {
      borderColor: "labelColor"
    }
  }),
  variant({
    variants: {
      error: {
        borderColor: "redLight",
        "&:hover, &:focus": {
          borderColor: "redLight"
        }
      },
      disabled: {
        cursor: "not-allowed"
      }
    }
  }),
  ({ icon }) =>
    icon &&
    css({
      paddingLeft: 30
    }),
  ({ prefix }) =>
    prefix &&
    css({
      paddingLeft: 0,
      borderRadius: "0 8px 0 0"
    }),
  ({ showPassword }) =>
    showPassword &&
    css({
      borderRadius: "8px 0 0 0"
    })
);

export const InputPrefix = styled("span")(
  css({
    borderBottom: "1px solid",
    borderColor: "grayDefaultColor",
    fontFamily: "text",
    bg: "focusInput",
    color: "grayDark",
    borderRadius: "8px 0 0 0",
    padding: "8px 0 8px 12px",
    fontSize: 2,
    lineHeight: "24px"
  }),
  ({ icon }) =>
    icon &&
    css({
      paddingLeft: 30
    })
);

export const InputMaskStyle = styled(InputMask)(
  css({
    width: "100%",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "1px solid",
    borderLeft: "none",
    borderColor: "grayDefaultColor",
    caretColor: theme.colors.secondaryColor,
    fontFamily: "text",
    bg: "focusInput",
    color: "textInput",
    borderRadius: "8px 8px 0 0",
    padding: "8px 12px",
    fontSize: 2,
    lineHeight: "24px",
    "::placeholder": {
      color: "grayDefaultColor"
    },
    "&:hover, &:focus": {
      borderColor: "labelColor"
    }
  }),
  variant({
    variants: {
      error: {
        borderColor: "redLight",
        "&:hover, &:focus": {
          borderColor: "redLight"
        }
      },
      disabled: {
        cursor: "not-allowed"
      }
    }
  })
);

export const InputError = styled("span")(
  css({
    fontSize: 1,
    color: "redLight",
    alignSelf: "flex-end"
  })
);

export const TextareaStyle = styled("textarea")(
  css({
    resize: "none",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "1px solid",
    borderLeft: "none",
    borderColor: "grayDefaultColor",
    caretColor: theme.colors.secondaryColor,
    fontFamily: "text",
    bg: "focusInput",
    color: "textInput",
    borderRadius: "8px 8px 0 0",
    padding: "8px 12px",
    fontSize: 2,
    lineHeight: "24px",
    "::placeholder": {
      color: "grayDefaultColor"
    },
    "&:hover, &:focus": {
      borderColor: "labelColor"
    }
  })
);

export const SelectStyle = styled("select")(
  css({
    width: "100%",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "1px solid",
    borderLeft: "none",
    borderColor: "grayDefaultColor",
    fontFamily: "text",
    backgroundColor: "focusInput",
    backgroundImage: icons.arrowBottom,
    backgroundRepeat: "no-repeat",
    backgroundSize: "10px",
    backgroundPositionX: "99%",
    backgroundPositionY: "center",
    color: "textInput",
    borderRadius: "8px 8px 0 0",
    padding: "8px 12px",
    fontSize: 2,
    lineHeight: "24px",
    appearance: "none",
    "&:hover": {
      cursor: "pointer"
    }
  })
);

export const OptionStyle = styled("option")(
  css({
    bg: "focusInput",
    border: "none",
    borderRadius: "8px 8px 0 0",
    color: "textInput",
    display: "flex",
    whiteSpace: "pre",
    minHeight: "20px",
    padding: "0px 2px 1px",
    "&:hover, &:focus": {
      borderColor: "labelColor"
    }
  })
);

export const SwitchStyle = styled("div")(
  css({
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "50px",
    height: "30px",
    borderRadius: "30px",
    cursor: "pointer",
    bg: "grayDefaultColor",
    "::before": {
      content: "''",
      bg: "white",
      position: "absolute",
      left: "2px",
      width: "26px",
      height: "26px;",
      borderRadius: "50%",
      transition: "left 0.2s ease-out"
    }
  }),
  variant({
    variants: {
      checked: {
        background: ({
          colors: { primaryColor, secondaryColor }
        }) => `linear-gradient(
         35deg,
         ${primaryColor},
         ${secondaryColor} 100%
        )`,
        "::before": {
          left: "22px"
        }
      }
    }
  })
);

export const RadioContainer = styled("label")(
  css({
    position: "relative",
    display: "flex",
    flex: "1 0 auto",
    alignItems: "flex-start",
    fontFamily: "textLight",
    color: "backText",
    fontSize: 3,
    lineHeight: "24px",
    marginBottom: 0,
    cursor: "pointer",
    span: {
      display: "block",
      ":first-letter": {
        textTransform: "capitalize"
      }
    }
  })
);

export const RadioStyle = styled("input")(
  css({
    all: "unset",
    minWidth: "20px",
    height: "20px",
    border: "2px solid",
    borderColor: "grayDefaultColor",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "10px",
    marginTop: "3px",
    transition: "all 150ms",
    verticalAlign: "middle",
    "&:checked": {
      bg: "transparent",
      "~ .checked-icon": {
        position: "absolute",
        left: "5px",
        top: "3px",
        width: "17px",
        height: "13px",
        path: {
          fill: theme.colors.secondaryColor
        }
      }
    }
  }),
  variant({
    variants: {
      disabled: {
        bg: "grayDefaultColor",
        cursor: "not-allowed",
        "~ svg": { cursor: "not-allowed" }
      }
    }
  })
);

export const CheckboxContainer = styled("label")(
  css({
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    userSelect: "none",
    fontFamily: "textLight",
    color: "backText",
    fontSize: 3,
    lineHeight: "24px",
    marginBottom: 0,
    cursor: "pointer",
    span: {
      display: "block",
      ":first-letter": {
        textTransform: "capitalize"
      }
    }
  })
);

export const CheckboxStyle = styled("input")(
  css({
    all: "unset",
    minWidth: "24px",
    height: "24px",
    border: "3px solid",
    borderRadius: "3px",
    borderColor: "grayDefaultColor",
    display: "inline-block",
    marginRight: "10px",
    transition: "all 150ms",
    "&:checked": {
      bg: "secondaryColor",
      borderColor: "secondaryColor",
      "~ .checked-icon": {
        position: "absolute",
        left: "3px",
        top: "6px",
        width: "17px",
        height: "13px",
        path: {
          fill: theme.colors.paleGrey
        }
      }
    }
  }),
  variant({
    variants: {
      disabled: {
        bg: "grayDefaultColor",
        cursor: "not-allowed",
        "~ svg": { cursor: "not-allowed" }
      }
    }
  })
);

export const ContainerQuestionsChecked = styled("div")(
  css({
    width: "100%",
    cursor: "default",
    padding: "8px 16px",
    borderRadius: "4px",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    span: {
      color: "gray",
      fontSize: "18px",
      lineHeight: "24px"
    }
  }),
  ({ checkedSelected }) =>
    checkedSelected &&
    css({
      span: {
        color: "secondaryColor"
      }
    })
);

export const TextStyleChecked = styled("div")(
  css({
    width: "100%",
    display: "flex",
    fontSize: "18px",
    lineHeight: "24px",
    color: "textConfig",
    justifyContent: "space-between"
  }),
  ({ checkedSelected }) =>
    checkedSelected &&
    css({
      color: "secondaryColor"
    }),
  variant({
    variants: {
      disabled: {
        cursor: "not-allowed"
      }
    }
  })
);

export const ContainerCheckedStyle = styled("div")(
  ({ porcentageWidth }) =>
    porcentageWidth &&
    css({
      width: `${porcentageWidth}%`,
      height: "100%",

      position: "absolute",
      left: "0px",
      bottom: "0px",
      opacity: "0.4",
      borderRadius: "4px"
    }),
  ({ checkedSelected }) =>
    checkedSelected
      ? css({
          backgroundColor: "secondaryColor"
        })
      : css({
          backgroundColor: "grayDefaultColor"
        })
);

export const MultiSelect = styled("div")(
  css({
    width: "100%",
    display: "flex",
    flexDirection: "column"
  })
);

export const ContainerSelectStyle = styled("div")(
  css({
    width: "100%",
    cursor: "pointer"
  })
);

export const OverSelect = styled("div")(
  css({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  })
);

export const ContainerCheckBoxes = styled("div")(
  css({
    zIndex: 100,
    width: "100%",
    display: "flex",
    marginTop: "6px",
    padding: "14px 0px",
    position: "absolute",
    flexDirection: "column",

    borderRadius: "8px",
    backgroundColor: "paleGrey",
    boxShadow: `0 1px 5px 0 ${theme.colors.grayDark}`
  })
);

export const CheckBoxLabel = styled("label")(
  css({
    margin: 0,
    display: "flex",
    cursor: "pointer",
    padding: "5px 14px",
    position: "relative",
    alignItems: "center",

    fontize: "18px",
    fontWeight: 300,
    lineHeight: "16px",
    color: "textConfig",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "secondaryColorLight"
    }
  })
);

export const Checkbox = styled("div")(
  css({
    width: "16px",
    height: "16px",
    cursor: "pointer",

    marginRight: "10px",
    transition: "all 150ms",

    border: "2px solid",
    borderRadius: "3px",
    display: "inline-block",
    borderColor: "textConfig"
  }),
  ({ checked }) =>
    checked &&
    css({
      background: `linear-gradient(
        35deg,
        ${theme.colors.primaryColor},
        ${theme.colors.secondaryColor} 100%
        )`,
      border: "1px solid",
      borderColor: "primaryColor",
      "~ .checked-icon": {
        position: "absolute",
        top: "8px",
        left: "16px",
        width: "12px",
        height: "9px",
        path: {
          fill: "defaultBackground"
        }
      }
    })
);

export const InputIcon = styled.div`
  ::before {
    position: absolute;
    top: 10px;
    left: 6px;
    ${({ typeIcon }) =>
      typeIcon && typeIcon !== "facebook"
        ? `
        content: ${icons[typeIcon]};
        transform: scale(0.85);
      `
        : `content: ${icons[typeIcon]};`};
  }
`;

export const HiddenCheckbox = styled.input`
  min-height: 20px;
  margin: unset;
  overflow: hidden;
  opacity: 0;
  position: absolute;
  white-space: nowrap;
  min-width: 23px;
`;

export const ContainerRadioButtonGeneric = styled("div")(
  css({
    width: "100%"
  })
);

export const ContentOptionRadioButton = styled("div")(
  css({
    width: "100%",
    display: "flex",
    padding: "16px",
    cursor: "pointer",
    alignItems: "center",
    hover: {
      opacity: 0.7
    }
  })
);

export const InputTextTittle = styled("h3")(
  css({
    margin: 0,
    fontSize: 16,
    color: "gray",
    fontWeight: "300",
    marginLeft: "8px",
    fontFamily: "text",
    lineHeight: "16px",
    fontStyle: "normal"
  })
);

export const ContentImgRadionIcon = styled("div")(
  css({
    width: "25px",
    height: "25px",
    alignItems: "center",
    justifyContent: "center"
  })
);

export const ImgRadioIcon = styled("img")(
  css({
    width: "100%",
    height: "100%"
  })
);

export const ContaineIconPassword = styled("label")(
  css({
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    bg: "focusInput",
    padding: "8px 12px",

    borderRadius: "0 8px 0 0",
    borderTop: "none",
    borderRight: "none",
    borderBottom: "1px solid",
    borderLeft: "none",
    borderColor: "grayDefaultColor",

    svg: {
      transition: 0.2,
      maxWidth: "25px",
      maxHeight: "25px",
      cursor: "pointer",
      path: {
        fill: "grayDefaultColor"
      },
      ":hover": {
        opacity: 0.7
      }
    }
  })
);

export const TextLink = styled("h3")(
  css({
    m: 0,
    fontSize: 2,
    lineHeight: "24px",
    color: `${theme.colors.textConfig}`,
    fontFamily: `${theme.fonts.textLight}`
  })
);
