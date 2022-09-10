import { styled } from "@nextui-org/react";

export const ContainerPokedexStyled = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  "@xs": {
    gridTemplateColumns: "1fr 1fr",
  },
});
