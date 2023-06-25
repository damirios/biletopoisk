import { RootState } from "../store";

export const selectCartModule = (state: RootState) => state.cart;
export const selectMovieAmount = (state: RootState, id: string) => selectCartModule(state)[id] || 0;