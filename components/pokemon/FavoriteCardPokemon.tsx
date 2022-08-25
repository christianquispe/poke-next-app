import NextLink from "next/link";
import { Card, Link } from "@nextui-org/react";

interface FavoritePokemonsProps {
  pokemonId: number;
}

export const FavoriteCardPokemon: React.FC<FavoritePokemonsProps> = ({
  pokemonId,
}) => {
  return (
    <NextLink href={`/pokemon/${pokemonId}`}>
      <Link>
        <Card isHoverable isPressable css={{ p: 10 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width={"100%"}
            height={140}
          />
        </Card>
      </Link>
    </NextLink>
  );
};
