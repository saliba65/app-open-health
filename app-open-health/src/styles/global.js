import RubikBlack from "../assets/fonts/Rubik-Black.ttf";
import RubikBlackItlic from "../assets/fonts/Rubik-BlackItalic.ttf";
import RubikBold from "../assets/fonts/Rubik-Bold.ttf";
import RubikBoldItalic from "../assets/fonts/Rubik-BoldItalic.ttf";
import RubikItalic from "../assets/fonts/Rubik-Italic.ttf";
import RubikLight from "../assets/fonts/Rubik-Light.ttf";
import RubikLightItalic from "../assets/fonts/Rubik-LightItalic.ttf";
import RubikMedium from "../assets/fonts/Rubik-Medium.ttf";
import RubikMediumItalic from "../assets/fonts/Rubik-MediumItalic.ttf";
import RubikRegular from "../assets/fonts/Rubik-Regular.ttf";

import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;

    scrollbar-color: ${theme.colors.secondaryColor} transparent;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.secondaryColor};
      border: 3px solid white;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.secondaryColorLight};
    }
  }

  html, body, #root {
    display: flex;
    flex: 1;
    min-height: 100%;
    background-color: ${theme.colors.defaultBackground};
  }

 
  
  label {
    margin-bottom: 0;
  }

  @font-face {
    font-family: 'RubikBlack';
    font-display: block;
    src: url('${RubikBlack}') format('opentype');
  }
  @font-face {
    font-family: 'RubikBlackItlic';
    font-display: block;
    src: url('${RubikBlackItlic}') format('opentype');
  }
  @font-face {
    font-family: 'RubikBold';
    font-display: block;
    src: url('${RubikBold}') format('opentype');
  }
  @font-face {
    font-family: 'RubikBoldItalic';
    font-display: block;
    src: url('${RubikBoldItalic}') format('opentype');
  }
  @font-face {
    font-family: 'RubikItalic';
    font-display: block;
    src: url('${RubikItalic}') format('opentype');
  }
  @font-face {
    font-family: 'RubikLight';
    font-display: block;
    src: url('${RubikLight}') format('opentype');
  }
  @font-face {
    font-family: 'RubikLightItalic';
    font-display: block;
    src: url('${RubikLightItalic}') format('opentype');
  }
  @font-face {
    font-family: 'RubikMedium';
    font-display: block;
    src: url('${RubikMedium}') format('opentype');
  }
  @font-face {
    font-family: 'RubikMediumItalic';
    font-display: block;
    src: url('${RubikMediumItalic}') format('opentype');
  }
  @font-face {
    font-family: 'RubikRegular';
    font-display: block;
    src: url('${RubikRegular}') format('opentype');
  }

  html{
    scroll-behavior: smooth;
  }
  body,
  p {
    font-family: "RubikRegular", sans-serif;
  }
  h1,h2 {
    font-family: "RubikBold", sans-serif;
  }
`;
