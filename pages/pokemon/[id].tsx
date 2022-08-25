import { useState, useEffect } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import {
  Grid,
  Card,
  Text,
  Button,
  Container,
  Image,
  Loading,
} from "@nextui-org/react";

import confetti from "canvas-confetti";

import { Layout } from "../../components/layouts";

import { Pokemon } from "../../interfaces";

import { localFavorites, getPokemonInfo } from "../../utils";

interface PokemonProps {
  pokemon: Pick<Pokemon, "name" | "sprites" | "id">;
}

const Pokemon: NextPage<PokemonProps> = ({ pokemon }) => {
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
    <Layout title={`Información de ${pokemon.name}`}>
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
              css={{ display: "flex", justifyContent: "space-between" }}
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
                {isFavorite ? "Es favorito" : "Guardar en favoritos"}
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
  const pokemonsParams: { params: { id: string } }[] = [...Array(151)].map(
    (_poke, idx) => ({
      params: { id: `${idx + 1}` },
    })
  );

  return {
    paths: pokemonsParams,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  const pokemon = await getPokemonInfo(id);

  return {
    props: {
      pokemon,
    },
  };
};

export default Pokemon;
