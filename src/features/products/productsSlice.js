import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

const url = 'https://fakestoreapi.com/products';
// const url = 'http://127.0.0.1:5000/products';

export const createAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const productSlice = createAppSlice({
    name: 'products',
    initialState: {
        loading: true,
        products: [],
    },
    reducers: (create) => ({
        getProducts: create.asyncThunk(
            async (id, thunkApi) => {
                const res = await fetch(url);
                const data = await res.json();
                return await data;
            },
            {
                pending: (state) => {
                    state.loading = true;
                },
                rejected: (state, action) => {
                    state.loading = false;
                },
                fulfilled: (state, action) => {
                    state.loading = false;
                    state.products = action.payload;
                },
            }
        ),
    }),
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
