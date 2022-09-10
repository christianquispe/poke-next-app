import { styled } from "@nextui-org/react";

export const ContainerPokedexStyled = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  ".current-pokemon:nth-child(1)": {
    display: "none",
  },
  "@xs": {
    ".current-pokemon:nth-child(1)": {
      display: "flex",
    },
    gridTemplateColumns: "1fr 1fr",
  },
});
