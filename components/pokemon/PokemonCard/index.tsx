import React from "react";
import NextLink from "next/link";
import { Link, Image, Text } from "@nextui-org/react";

import { SmallPokemon } from "../../../interfaces";

import { PokemonCardStyled } from "./styles";

interface PokemonCardProps {
  pokemon?: SmallPokemon;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <PokemonCardStyled>
      <div className="header">
        <Text transform="uppercase" css={{ m: "0" }}>
          {pokemon?.name}
        </Text>
        <NextLink href={`/name/${pokemon?.name}`}>
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
    </PokemonCardStyled>
  );
};
