import React from "react";
import { Image } from "@nextui-org/react";

import { PokemonCard } from "../PokemonCard";

import { useSelector } from "react-redux";
import { selectPokemonsState } from "../../../redux/slices/pokemonSlice";

import { WrraperStyled, CurrentPokemonStyled } from "./styles";

export const CurrentPokemon: React.FC = () => {
  const { currentPokemon, hoveredPokemon } = useSelector(selectPokemonsState);

  return (
    <WrraperStyled className="current-pokemon">
      <CurrentPokemonStyled>
        {(hoveredPokemon || currentPokemon) ? (
          <PokemonCard pokemon={hoveredPokemon || currentPokemon} />
        ) : (
          <div>
            <Image
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
              }
              alt={"Sin pokemon elegido"}
              width={100}
              height={100}
              css={{ opacity: 0.1 }}
            />
          </div>
        )}
      </CurrentPokemonStyled>
    </WrraperStyled>
  );
};
