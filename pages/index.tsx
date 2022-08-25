import { NextPage, GetStaticProps } from "next";

import { Grid } from "@nextui-org/react";

import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

import { pokeApi } from "../api";

import { PokemonsListResponse, SmallPokemon } from "../interfaces";

interface HomePageProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsListResponse>(
    "/pokemon?limit=151"
  );

  const pokemons: SmallPokemon[] = data.results.map((poke, idx) => ({
    ...poke,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      idx + 1
    }.svg`,
    id: idx + 1,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
