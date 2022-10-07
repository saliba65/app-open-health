import styled from "styled-components";
import css from "@styled-system/css";
import { flexbox, space, layout, border, color } from "styled-system";

const Flex = styled("div")(
  layout,
  flexbox,
  space,
  border,
  color,
  css({
    display: "flex",
    position: "relative",
  }),
  ({ spaceChildren, flexDirection, paddingBottom }) => {
    switch (flexDirection) {
      case "column":
        return css({
          "> :nth-child(n):not(:last-child)": {
            marginBottom: spaceChildren,
          },
          "@media (max-width: 539px)": {
            paddingBottom: paddingBottom && "150px",
          },
        });
      case "row-reverse":
        return css({
          "> :nth-child(n):not(:last-child)": {
            marginLeft: spaceChildren,
          },
        });
      case "column-reverse":
        return css({
          "> :nth-child(n):not(:last-child)": {
            marginTop: spaceChildren,
          },
        });
      default:
        return css({
          "> :nth-child(n):not(:last-child)": {
            marginRight: spaceChildren,
          },
        });
    }
  },
);

export default Flex;
