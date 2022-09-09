import { SmallPokemon } from "../../../interfaces";
import { PokemonCard } from "../PokemonCard";

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
        <PokemonCard
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
