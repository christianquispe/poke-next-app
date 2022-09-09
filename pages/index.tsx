import { useState } from "react";
import { NextPage, GetStaticProps } from "next";

import { Layout } from "../components/layouts";
import {
  PokemonList,
  ContainerPokedex,
  CurrentPokemon,
} from "../components/pokemon";

import { pokeApi } from "../api";

import { PokemonsListResponse, SmallPokemon } from "../interfaces";
import { getShortDetail } from "../helpers/data";

interface HomePageProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  const [currentPokemon, setCurrentPokemon] = useState<
    SmallPokemon | undefined
  >();
  const [hoveredPokemon, setHoveredPokemon] = useState<
    SmallPokemon | undefined
  >();
  const [hasSelection, setHasSelection] = useState(false);

  const handleHover = (pokemon: SmallPokemon) => {
    setHoveredPokemon(pokemon);
  };

  const handleLeave = () => {
    setHoveredPokemon(undefined);
  };

  const handleSelect = (pokemon: SmallPokemon) => {
    if (hasSelection) {
      setCurrentPokemon((prevPokemon) => {
        if (prevPokemon?.id === pokemon.id) {
          setHasSelection(false);
          return undefined;
        }
        return pokemon;
      });
      return;
    }
    setHasSelection(true);
    setCurrentPokemon(pokemon);
  };

  return (
    <Layout title="Listado de Pokémons">
      <ContainerPokedex>
        <CurrentPokemon pokemon={hoveredPokemon || currentPokemon} />
        <PokemonList
          onSelect={handleSelect}
          onHover={handleHover}
          onLeave={handleLeave}
          pokemons={pokemons}
          selectedPokemon={currentPokemon}
        />
      </ContainerPokedex>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let pokemons: SmallPokemon[] = [];
  const getAllPokemons = async () => {
    const { data } = await pokeApi.get<PokemonsListResponse>(
      "/pokemon?limit=50"
    );
    for (const pokemon of data.results) {
      const res = await pokeApi.get(`/pokemon/${pokemon.name}`);
      pokemons = [...pokemons, getShortDetail(res.data)];
    }
  };

  await getAllPokemons();

  return {
    props: {
      pokemons: pokemons || [],
    },
  };
};

export default HomePage;
