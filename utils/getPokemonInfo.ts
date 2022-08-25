import { pokeApi } from "../api";

import { Pokemon } from "../interfaces";

type GetPokemonInfoResponde = Pick<Pokemon, "name" | "sprites" | "id">;

export const getPokemonInfo = async (
  nameOrId: string
): Promise<GetPokemonInfoResponde> => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
