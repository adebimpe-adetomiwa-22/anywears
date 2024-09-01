import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // url: 'http://127.0.0.1:5000',
    url: 'https://fakestoreapi.com',
};

const productsUrlSlice = createSlice({
    name: 'productsUrl',
    initialState,
});

export default productsUrlSlice.reducer;
