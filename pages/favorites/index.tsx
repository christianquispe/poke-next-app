import { useState, useEffect } from "react";

import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritePokemons } from "../../components/pokemon";
import { localFavorites } from "../../utils";

const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, []);

  return (
    <Layout title="Pokemones favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemonsId={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritePage;
