import styled from "styled-components";
import css from "@styled-system/css";

import Flex from "../../components/core/Grid/Flex";

export const OurCompaniesList = styled(Flex)(
  css({
    flexWrap: "wrap",
    mx: -1,
    "> :nth-child(n)": {
      mx: 2,
      mb: 4
    },

    "@media (max-width: 320px)": {
      marginBottom: "50px",
      marginLeft: "25px"
    },

    "@media (min-width: 321px) and (max-width: 374px)": {
      marginLeft: "35px"
    },

    "@media (min-width: 375px) and (max-width: 410px)": {
      marginLeft: "45px"
    },

    "@media (min-width: 411px) and (max-width: 767px)": {
      marginLeft: "55px"
    }
  })
);

export const CompanyCard = styled(Flex)(
  css({
    bg: "paleGrey",
    cursor: "pointer",
    borderRadius: "8px",
    flexDirection: "column",
    width: "228px",
    height: "296px",
    wordWrap: "break-word",
    overflow: "hidden",
    transition: "box-shadow ease-out .2s",
    marginRight: "5px",
    "&:hover": {
      boxShadow: "0px 12px 22px rgba(0, 0, 0, 0.12);",
      "> div": {
        borderColor: "white"
      }
    },
    img: {
      borderRadius: "5px 5px 0 0",
      height: "106px",
      objectFit: "contain",
      width: "100%",
      maxWidth: "228px",
      padding: "10px"
    }
  })
);

export const CompanyInfo = styled(Flex)(
  css({
    flex: 1,
    padding: 3,
    width: "228px",
    borderRadius: "5px",
    flexDirection: "column",
    borderWidth: "0 1px 1px 1px",
    borderStyle: "solid",
    borderColor: "transparent",
    h1: {
      mb: 0,
      fontSize: 2,
      lineHeight: 1.4,
      fontWeight: "600",
      fontFamily: "heading",
      color: "primaryColor"
    },
    h2: {
      mt: 1,
      mb: 2,
      fontSize: 1,
      lineHeight: 1.4,
      fontFamily: "text",
      color: "primaryColor"
    },
    p: {
      mb: 0,
      fontSize: 1,
      color: "gray",
      lineHeight: 1.6,
      fontFamily: "text",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      position: "relative",
      overflow: "hidden",
      textOverflow: "ellipsis",
      "-webkit-line-clamp": "5",
      "-webkit-box-orient": "vertical"
    }
  })
);
