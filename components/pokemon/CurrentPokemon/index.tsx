import React from "react";
import NextLink from "next/link";
import { Link, Image, Text } from "@nextui-org/react";

import { SmallPokemon } from "../../../interfaces";

import { WrraperStyled, CurrentPokemonStyled, TableInfoStyled } from "./styles";

interface CurrentPokemonProps {
  pokemon?: SmallPokemon;
}

export const CurrentPokemon: React.FC<CurrentPokemonProps> = ({ pokemon }) => {
  return (
    <WrraperStyled>
      <CurrentPokemonStyled>
        {pokemon ? (
          <TableInfoStyled>
            <div className="header">
              <Text transform="uppercase" css={{ m: "0" }}>
                {pokemon?.name}
              </Text>
              <NextLink href={`/name/${pokemon.name}`}>
                <Link css={{ background: "transparent", color: "$black" }}>
                  Ver detalle
                </Link>
              </NextLink>
            </div>
            <div className="image-wrapper">
              <Image
                src={
                  pokemon?.sprites.other?.["official-artwork"].front_default ||
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                }
                alt={`${pokemon?.name}`}
                width={300}
                height={300}
                css={typeof pokemon === "undefined" ? { opacity: 0.1 } : {}}
              />
            </div>
            <div className="left">Type</div>
            <div className="right">{pokemon?.types?.[0].type.name}</div>
            <div className="left">Height</div>
            <div className="right">{pokemon?.height} m</div>
            <div className="left">Weight</div>
            <div className="right">{pokemon?.weight} lbs</div>
            {pokemon?.stats
              .map(({ stat, base_stat }) => (
                <React.Fragment key={stat?.name}>
                  <div className="left">{stat.name.replace("-", " ")}</div>
                  <div className="right">{base_stat}</div>
                </React.Fragment>
              ))
              .slice(0, 3)}
          </TableInfoStyled>
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
