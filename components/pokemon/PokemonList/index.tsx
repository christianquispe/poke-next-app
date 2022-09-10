import { SmallPokemon } from "../../../interfaces";
import { PokemonItem } from "../PokemonItem";

import { PokemonListStyled } from "./styles";

interface PokemonListProps {
  selectedPokemon?: SmallPokemon;
  pokemons: SmallPokemon[];
  onHover: (pokemon: SmallPokemon) => void;
  onLeave: (pokemon: SmallPokemon) => void;
  onSelect: (pokemon: SmallPokemon) => void;
}

export const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  onHover,
  onLeave,
  onSelect,
  selectedPokemon,
}) => {
  return (
    <PokemonListStyled>
      {pokemons.map((pokemon) => (
        <PokemonItem
          key={pokemon.id}
          pokemon={pokemon}
          onMouseOver={() => onHover(pokemon)}
          onMouseLeave={() => onLeave(pokemon)}
          onClick={() => onSelect(pokemon)}
          isSelected={selectedPokemon?.id === pokemon.id}
        />
      ))}
    </PokemonListStyled>
  );
};
