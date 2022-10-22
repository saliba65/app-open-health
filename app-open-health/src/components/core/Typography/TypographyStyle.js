import styled from "styled-components";
import css from "@styled-system/css";

import Flex from "../Grid/Flex";

export const Container = styled(Flex)(
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 3,
    justifyContent: "space-between",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "grayDefaultColor",
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      color: "backText",
      lineHeight: "32px",
      fontWeight: "600",
      margin: 0,
      padding: 0
    }
  }),
  ({ fontSize }) =>
    css({
      "h1, h2, h3, h4, h5, h6": {
        fontSize: fontSize || 4
      }
    }),
  ({ noBorder }) =>
    noBorder &&
    css({
      border: "none"
    })
);
