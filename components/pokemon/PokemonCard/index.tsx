import { Card, Row, Text, Image, CardProps, CSS } from "@nextui-org/react";
import { MdCatchingPokemon } from "react-icons/md";

import { SmallPokemon } from "../../../interfaces";

import { CardBody } from "./styles";

interface PokemonCardProps extends Omit<CardProps, "children"> {
  pokemon: SmallPokemon;
  isSelected: boolean;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  isSelected,
  ...rest
}) => {
  const css: CSS = {
    background: "transparent",
    borderRadius: "0",
    "&:hover": {
      background:
        "linear-gradient(115deg, rgb(38, 41, 43) 57.7%, rgb(0, 0, 0) 57.7%)",
    },
  };

  return (
    <Card
      isPressable
      disableRipple={false}
      css={
        isSelected
          ? {
              ...css,
              background:
                "linear-gradient(115deg, rgb(38, 41, 43) 57.7%, rgb(0, 0, 0) 57.7%)",
            }
          : css
      }
      {...rest}
    >
      <CardBody>
        <Row justify="space-between" align="center">
          <div className="left">
            <Image
              css={{ margin: 0 }}
              src={
                pokemon?.sprites.other?.["official-artwork"].front_default ||
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
              }
              alt={`Imagen de ${pokemon.name}`}
              width={50}
              height={50}
            />
            <Text>#{pokemon.id}</Text>
          </div>
          <div className="right">
            <Text transform="uppercase">{pokemon.name}</Text>
            <Text>
              <MdCatchingPokemon />
            </Text>
          </div>
        </Row>
      </CardBody>
    </Card>
  );
};
