import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    [id: string]: number;
};

const initialState: InitialStateType = {

};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: function(state, {payload}: PayloadAction<string>) {
            const amount = state[payload] || 0;
            state[payload] = amount + 1;
        },
        decrement: function(state, {payload}: PayloadAction<string>) {
            const amount = state[payload];

            if (!amount) {
                return;
            }

            if (amount === 1) {
                delete state[payload];
                return;
            }

            state[payload] = amount - 1;
        },
        reset: function(state) {
            state = initialState;
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;