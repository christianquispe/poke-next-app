import {
  Card,
  Grid,
  Text,
  Button,
  Loading,
  Container,
  Image,
} from "@nextui-org/react";
import confetti from "canvas-confetti";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";

import { pokeApi } from "../../api";

import { Layout } from "../../components/layouts";

import { Pokemon, PokemonsListResponse } from "../../interfaces";

import { getPokemonInfo, localFavorites } from "../../utils";

interface PokemonByNamePageProps {
  pokemon: Pick<Pokemon, "name" | "sprites" | "id">;
}

const PokemonByNamePage: NextPage<PokemonByNamePageProps> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState<undefined | boolean>(false);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsFavorite(!isFavorite);

    if (isFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  useEffect(() => {
    setIsFavorite(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  return (
    <Layout
      title={`Información de ${pokemon.name}`}
      img={pokemon.sprites.other?.dream_world.front_default}
    >
      <Grid.Container gap={2} css={{ marginTop: "5px" }}>
        <Grid xs={12} md={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} md={8}>
          <Card>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                onPress={onToggleFavorite}
                color="gradient"
                ghost={!isFavorite}
              >
                {isFavorite === undefined ? (
                  <Loading type="spinner" color="currentColor" />
                ) : null}
                {isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonsListResponse>(
    "/pokemon?limit=151"
  );

  const handleData = () => {
    return data.results.map((poke) => {
      return { params: { name: poke.name } };
    });
  };

  return {
    paths: handleData(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const name = params?.name as string;

  const pokemon = await getPokemonInfo(name);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
