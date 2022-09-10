import { styled } from "@nextui-org/react";

export const PokemonCardStyled = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  borderRadius: "$xs",
  overflow: "hidden",
  width: "100%",
  minWidth: "300px",
  gap: "$1",
  ".header, .image-wrapper": {
    gridColumn: "1 / span 2",
    mb: "$8",
  },
  ".header": {
    background: "linear-gradient(115deg, $accents0 50%, $accents9 50%)",
    padding: "$4",
    d: "flex",
    jc: "space-between",
    alignItems: "center",
  },
  ".left": {
    background: "$accents9",
    padding: "$4",
    textTransform: "capitalize",
    color: "$black",
  },
  ".right": {
    textTransform: "capitalize",
    background: "$accents9",
    padding: "$4",
    color: "$black",
  },
});
