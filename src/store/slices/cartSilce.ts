import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateType = {
    [id: string]: number;
};

export const MAX_ITEM_AMOUNT_IN_CART = 30;
export const MIN_ITEM_AMOUNT_IN_CART = 1;

const initialState: InitialStateType = {};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: function(state, {payload}: PayloadAction<string>) {
            const amount = state[payload] || 0;
            if (amount !== MAX_ITEM_AMOUNT_IN_CART) {
                state[payload] = amount + 1;
            }
        },
        decrement: function(state, {payload}: PayloadAction<string>) {
            const amount = state[payload];

            if (!amount) {
                return;
            }

            if (amount === MIN_ITEM_AMOUNT_IN_CART) {
                delete state[payload];
                return;
            }

            state[payload] = amount - 1;
        },
        delete: function(state, {payload}: PayloadAction<string>) {
            delete state[payload];
        },
        reset: function(state) {
            state = initialState;
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;