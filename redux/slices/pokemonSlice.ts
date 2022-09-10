import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "../store";

import { SmallPokemon } from "../../interfaces";

export interface PokemonState {
  allPokemons: SmallPokemon[];
  currentPokemon?: SmallPokemon
  hoveredPokemon?: SmallPokemon
}

const initialState: PokemonState = {
  allPokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    initPokemons: (
      state: PokemonState,
      action: PayloadAction<SmallPokemon[]>
    ) => {
      state.allPokemons = [...state.allPokemons, ...action.payload];
    },
    selectPokemon: (
      state: PokemonState,
      action: PayloadAction<SmallPokemon | undefined>
    ) => {
      state.currentPokemon = action.payload;
    },
    hoverPokemon: (
      state: PokemonState,
      action: PayloadAction<SmallPokemon | undefined>
    ) => {
      state.hoveredPokemon = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action?.payload.pokemons,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { initPokemons, selectPokemon, hoverPokemon } = pokemonSlice.actions;

export const selectPokemonsState = (state: AppState) =>
  state.pokemons;

export default pokemonSlice.reducer;
