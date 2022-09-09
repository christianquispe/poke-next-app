import { styled } from "@nextui-org/react";

export const ContainerPokedexStyled = styled("div", {
  display: "grid",
  gridTemplateColumns: "0 1fr",
  "@xs": {
    gridTemplateColumns: "1fr 1fr",
  },
});
