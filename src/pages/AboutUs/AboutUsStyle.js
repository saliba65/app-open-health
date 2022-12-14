import styled from "styled-components";
import css from "@styled-system/css";
import Flex from "../../components/core/Grid/Flex";

export const GeneralContainer = styled(Flex)(
  css({
    marginBottom: "120px",
    padding: "30px 0px",
    paddingLeft: "80px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    a: {
      ":hover": {
        textDecoration: "none"
      }
    },

    "@media (max-width: 490px)": {
      paddingLeft: "0px",
      padding: "20px"
    }
  })
);

export const TextContent = styled("div")(
  css({
    maxWidth: "800px",
    marginBottom: "40px",

    h3: {
      color: "#2f313d;"
    }
  })
);

export const ImgContainer = styled("img")(
  css({
    maxWidth: "400px",
    marginBottom: "40px",

    "@media (max-width: 680px)": {
      maxWidth: "100%"
    }
  })
);

export const Text = styled("p")(
  css({
    color: "gray",
    marginBottom: 0,
    fontSize: "18px",
    fontFamily: "text"
  })
);

export const ContentDetails = styled("div")(
  css({
    display: "flex",
    paddingTop: "16px",
    position: "relative",
    alignItems: "center",
    flexDirection: "column"
  })
);

export const Image = styled("img")(
  css({
    width: "100%",
    borderRadius: "12px",

    "@media (min-width: 767px)": {
      width: "600px"
    }
  })
);

export const TextContainer = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  })
);

// export const KnowMoreButton = styled(Button)(
//   css({
//     width: "272px",
//     height: "52px",
//     margin: "30px 0px 30px 0px",
//     textTransform: "capitalize",
//     borderRadius: "8px",
//     minWidth: 120,
//     padding: "16px 96px",
//     svg: {
//       width: "20px",
//       path: {
//         stroke: "white"
//       }
//     }
//   })
// );
