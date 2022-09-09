import { Pokemon } from "./pokemon-full";

export interface PokemonsListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
}

export type SmallPokemon = Pick<
  Pokemon,
  "id" | "sprites" | "name" | "types" | "height" | "weight" | "stats"
>;
