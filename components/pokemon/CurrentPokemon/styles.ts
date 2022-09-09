import { styled } from "@nextui-org/react";

export const WrraperStyled = styled("div", {
  d: "flex",
  ai: "center",
  jc: "center",
});

export const CurrentPokemonStyled = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$8",
});

export const TableInfoStyled = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  borderRadius: "$xs",
  overflow: "hidden",
  width: "100%",
  minWidth: "300px",
  ".left": {
    background: "$accents0",
    padding: "$4",
    textTransform: "capitalize",
  },
  ".right": {
    background: "$accents9",
    padding: "$4",
    color: "$black",
  },
});
