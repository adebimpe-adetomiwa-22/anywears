import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: true,
    cartProducts: [],
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, action) => {
            state.cartProducts = action.payload;
        },
        addProduct: (state, action) => {},
        removeProduct: (state, action) => {},
    },
});

export const { updateCart, addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
