/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-use-before-define */
import { style } from "../style";

export default {
  colors: {
    primaryColor: style.colors.primaryColor,
    secondaryColor: style.colors.secondaryColor,
    tertiaryColor: style.colors.tertiaryColor,
    secondaryColorLight: style.colors.secondaryColor,
    filterConvertColorPrimary: style.colors.primaryColor,
    backText: "#2f313d",
    blue: "#1B59B3",
    blueLight: "#f3f6ff",
    blackLight: "#353846",
    charcoalGrey: "#333947",
    defaultBackground: "#fafcff",
    focusInput: "#f5f7fa",
    gray: "#7d86a1",
    grayDark: "#8A888A",
    grayLight: "#F8F7F8",
    grayMedium: "#D8D8D8",
    grayDefaultColor: "#ccd2e0",
    green: "#c1d659",
    greenDark: "#1FB312",
    paleGrey: "#f4f6fb",
    red: "#EF1D1D",
    redLight: "#ED6B6B",
    textColor: "#8892ac",
    textConfig: "#4b4e5c",
    yellow: "#ffc61b"
  },
  fonts: {
    heading: "RubikRegular, sans-serif",
    text: "RubikRegular, sans-serif",
    textLight: "RubikLight, sans-serif",
    textBold: "RubikBold, sans-serif",
    textBlack: "RubikBlack, sans-serif",
    textItalic: "RubikLightItalic, sans-serif"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  size: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
  },
  space: [0, 4, 8, 16, 24, 32, 64, 128]
};
