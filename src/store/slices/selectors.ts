import { RootState } from "../store";

export const selectCartModule = (state: RootState) => state.cart;
export const selectMovieTicketsAmount = (state: RootState, id: string) => selectCartModule(state)[id] || 0;
export const selectAllTicketsAmount = (state: RootState) => Object.values(state.cart).reduce((prev, curr) => prev + curr, 0);
export const selectCartModuleAndTicketsAmount = (state: RootState) => ({
    movieIds: selectCartModule(state),
    ticketsAmount: selectAllTicketsAmount (state)
});