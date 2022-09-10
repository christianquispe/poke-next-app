import React from "react";
import { Image } from "@nextui-org/react";

import { SmallPokemon } from "../../../interfaces";

import { PokemonCard } from "../PokemonCard";

import { WrraperStyled, CurrentPokemonStyled } from "./styles";

interface CurrentPokemonProps {
  pokemon?: SmallPokemon;
}

export const CurrentPokemon: React.FC<CurrentPokemonProps> = ({ pokemon }) => {
  return (
    <WrraperStyled className="current-pokemon">
      <CurrentPokemonStyled>
        {pokemon ? (
          <PokemonCard pokemon={pokemon} />
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
