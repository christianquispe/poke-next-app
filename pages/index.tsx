import { useState } from "react";
import { NextPage } from "next";
import { Modal, useModal } from '@nextui-org/react'

import { Layout } from "../components/layouts";
import {
  PokemonList,
  ContainerPokedex,
  CurrentPokemon,
  PokemonCard,
} from "../components/pokemon";

import { pokeApi } from "../api";

import { getShortDetail } from "../helpers/data";
import { TOTAL_POKEMONS } from "../config/constants";

import { useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import {
  initPokemons,
  selectPokemonsState,
} from "../redux/slices/pokemonSlice";

import { PokemonsListResponse, SmallPokemon } from "../interfaces";

interface HomePageProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = () => {
  const [currentPokemon, setCurrentPokemon] = useState<
    SmallPokemon | undefined
  >();
  const [hoveredPokemon, setHoveredPokemon] = useState<
    SmallPokemon | undefined
  >();
  const { setVisible, bindings } = useModal();
  const pokemons = useSelector(selectPokemonsState);

  const handleHover = (pokemon: SmallPokemon) => {
    setHoveredPokemon(pokemon);
  };

  const handleLeave = () => {
    setHoveredPokemon(undefined);
  };

  const handleSelect = (pokemon: SmallPokemon) => {
    setVisible(true)
    setCurrentPokemon(pokemon);
  };

  const handleClose = () => {
    setVisible(false)
    setCurrentPokemon(undefined) 
  }

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
      <Modal open={bindings.open} onClose={handleClose} blur>
        <PokemonCard pokemon={currentPokemon} />
      </Modal>
    </Layout>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  let pokemons: SmallPokemon[] = [];
  const getAllPokemons = async () => {
    const { data } = await pokeApi.get<PokemonsListResponse>(
      `/pokemon?limit=${TOTAL_POKEMONS}`
    );
    for (const pokemon of data.results) {
      const res = await pokeApi.get(`/pokemon/${pokemon.name}`);
      pokemons = [...pokemons, getShortDetail(res.data)];
    }
  };

  await getAllPokemons();
  store.dispatch(initPokemons(pokemons));

  return {
    props: {
      pokemons: pokemons || [],
    },
  };
});

export default HomePage;
