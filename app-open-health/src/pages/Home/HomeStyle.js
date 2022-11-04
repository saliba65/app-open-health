import styled from "styled-components";
import css from "@styled-system/css";
import Flex from "../../components/core/Grid/Flex";

export const Container = styled("div")(
  css({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px"
  })
);

export const Switches = styled(Flex)(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  })
);

export const Subtitle = styled("h3")(
  css({
    fontFamily: "heading",
    color: "backText",
    lineHeight: "32px",
    fontWeight: "600",
    margin: "40px 0px 20px 0px"
  })
);
