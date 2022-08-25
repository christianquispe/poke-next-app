import { Grid } from "@nextui-org/react";

import { FavoriteCardPokemon } from "../pokemon";

interface FavoritePokemonsProps {
  pokemonsId: number[];
}

export const FavoritePokemons: React.FC<FavoritePokemonsProps> = ({
  pokemonsId,
}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonsId.map((id) => (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
          <FavoriteCardPokemon pokemonId={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
