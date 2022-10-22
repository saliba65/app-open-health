import styled from "styled-components";
import css from "@styled-system/css";

export const Avatar = styled("img")(
  css({
    objectFit: "cover",
    borderRadius: "50%",
    backgroundColor: "paleGrey"
  }),
  ({ size }) => css({ width: size || "32px", height: size || "32px" }),
  ({ shadow }) =>
    shadow && css({ boxShadow: "0px 0px 0px 4px rgba(51, 51, 51, 0.12)" }),
  ({ ml }) => css({ ml }),
  ({ border }) => border && css({ border })
);
