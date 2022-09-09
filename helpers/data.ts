import { Pokemon, SmallPokemon } from "../interfaces";

export const getShortDetail = ({
  id,
  sprites,
  name,
  height,
  weight,
  stats,
  types,
}: Pokemon): SmallPokemon => {
  return { id, sprites, name, height, weight, stats, types };
};
