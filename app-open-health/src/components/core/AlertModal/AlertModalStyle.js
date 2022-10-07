import styled from "styled-components";
import Modal from "styled-react-modal";
import Flex from "../Grid/Flex";
import css from "@styled-system/css";
import theme from "../../../styles/theme";

export const ContainerModal = styled(Flex)(
  css({
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  })
);

export const ContainerType = styled("div")(
  css({
    width: 75,
    height: 75,
    marginTop: -75,
    borderRadius: "100%"
  }),
  ({ type }) =>
    type === "success"
      ? css({
          backgroundColor: "green",
          boxShadow: `0 2px 4px 0 ${theme.colors.green}`
        })
      : type === "errors" &&
        css({
          backgroundColor: "redLight",
          boxShadow: `0 2px 4px 0 ${theme.colors.redLight}`
        })
);

export const StyledModal = Modal.styled(
  css({
    p: 30,
    width: 570,
    fontSize: 18,
    minHeight: 240,
    borderRadius: 5,
    display: "flex",
    fontFamily: "text",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fafafa"
  }),
  ({ type }) =>
    type
      ? css({ borderTop: "none" })
      : css({ borderTop: `5px solid ${theme.colors.primaryColor}` })
);

export const TitleModal = styled("p")(
  css({
    fontSize: 36,
    fontWeight: "bold",
    color: "blackLight",
    fontFamily: "heading"
  })
);

export const SubTitle = styled("h2")(
  css({
    mb: 4,
    fontSize: 18,
    color: "backText",
    fontFamily: "textLight"
  })
);
