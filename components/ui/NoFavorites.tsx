import { Container, Text, Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        d: "flex",
        fd: "column",
        h: "calc(100vh - 100px)",
        ai: "center",
        jc: "center",
        alignSelf: "center",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="No favoritos"
        width={250}
        height={250}
        css={{ opacity: 0.1 }}
      />
    </Container>
  );
};
