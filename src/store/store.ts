import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSilce";
import { movieApi } from "./services/movieApi";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware])
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>