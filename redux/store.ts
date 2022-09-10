import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import pokemonSlice from "./slices/pokemonSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterSlice,
      pokemons: pokemonSlice,
    },

    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
