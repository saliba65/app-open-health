import styled from "styled-components";
import css from "@styled-system/css";
import { variant } from "styled-system";

import Flex from "../../components/core/Grid/Flex";

export const Header = styled(Flex)(
  css({
    padding: 4,
    borderBottom: "1px solid",
    borderBottomColor: "grayDefaultColor",
    "[type='avatar']": {
      border: "2px solid",
      borderColor: "grayDefaultColor",
      margin: "0 16px 0 0"
    },
    h2: {
      display: "flex",
      alignItems: "center",
      fontFamily: "text",
      fontSize: 2,
      fontWeight: 600,
      margin: 0,
      svg: {
        marginLeft: 2,
        marginRight: 1
      }
    },
    p: {
      fontFamily: "heading",
      fontSize: 2,
      margin: 0
    },
    span: {
      color: "yellow"
    }
  })
);

export const ContainerHistory = styled("div")(
  css({
    marginBottom: "50px",
    flexDirection: "column"
  })
);

export const History = styled("ul")(
  css({
    listStyle: "none outside none",
    height: "100%",
    margin: 0,
    "@media (max-width: 768px)": {
      marginBottom: "50px"
    }
  })
);

export const HistoryItem = styled("li")(
  css({
    display: "flex",
    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    borderWidth: "0 1px 1px 0",
    borderStyle: "solid",
    borderColor: "grayDefaultColor",

    "@media (max-width: 539px)": {
      paddingLeft: "10px",
      paddingRight: "3px"
    },
    "&:nth-child(even)": {
      bg: "paleGrey"
    },
    "> svg": {
      width: "22px",
      height: "22px",
      marginRight: 2,
      "&.purchase path": {
        stroke: "#501f99"
      },
      "&.purchase circle": {
        fill: "#501f99"
      }
    },
    ".collapse-trigger": {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: "auto",
      transition: "all 0.4s",
      transform: "rotate(-90deg)",
      path: {
        stroke: "black"
      }
    },
    "&.uncollapsed": {
      ".collapse-trigger": {
        transform: "rotate(90deg)"
      },
      ".collapse-element": {
        maxHeight: "80px",
        paddingTop: 2
      }
    }
  }),
  ({ collapse }) => collapse && css({ cursor: "pointer" })
);

export const Title = styled("h3")(
  css({
    fontFamily: "text",
    fontSize: 2,
    lineHeight: "24px",
    fontWeight: 600,
    width: "320px",
    margin: 0,
    marginRight: "20px",
    wordBreak: "break-all",

    "@media (max-width: 358px)": {
      width: "170px",
      marginRight: "10px"
    },

    "@media (min-width: 359px) and (max-width: 539px)": {
      width: "290px",
      marginRight: "10px"
    }
  })
);

export const RegisteredAt = styled("p")(
  css({
    fontFamily: "text",
    fontSize: "14px",
    color: "labelColor",
    marginBottom: 0,

    "@media (min-width: 1024px)": {
      fontSize: 0
    }
  })
);

export const Score = styled("span")(
  css({
    fontFamily: "heading",
    fontSize: 2,
    color: "#501f99",
    fontWeight: 500,
    marginTop: "2px",

    "@media (min-width: 1024px)": {
      fontSize: 2,
      fontWeight: 600,
      marginTop: 0
    }
  }),
  variant({
    variants: {
      negative: {
        color: "primaryColor"
      },
      coinsWeekSidebar: {
        fontSize: 4
      }
    }
  })
);

export const Justification = styled("p")(
  css({
    fontFamily: "text",
    fontSize: 2,
    color: "labelColor",
    paddingTop: 0,
    marginBottom: 0,
    maxHeight: 0,
    overflow: "hidden",
    transition: "all 0.4s ease-out"
  })
);
