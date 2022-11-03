import styled from "styled-components";
import css from "@styled-system/css";
import theme from "../../../styles/theme";
import Flex from "../../../components/core/Grid/Flex";

export const Coins = styled("div")(
  css({
    a: {
      textDecoration: "none",
      ":hover": {
        opacity: "0.7"
      }
    }
  })
);

export const CoinsValue = styled(Flex)(
  css({
    alignItems: "center",
    justifyContent: "flex-end"
  })
);

export const Score = styled("p")(
  css({
    m: 0,
    fontSize: 1,
    color: "yellow",
    fontFamily: `${theme.fonts.text}`,
    "@media (max-width: 1024px)": {
      fontSize: "15px"
    }
  })
);

export const CoinsPlusStyle = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: center;
  float: right;
  color: ${theme.colors.yellow};
  svg {
    margin-right: 8px;
  }
`;
