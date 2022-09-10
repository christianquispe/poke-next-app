import { styled, Card } from "@nextui-org/react";

export const CardBody = styled(Card.Body, {
  p: "$10",
  w: "100%",
  ".left, .right": {
    display: "flex",
    ai: "center",
    gap: "$5",
  },
});
