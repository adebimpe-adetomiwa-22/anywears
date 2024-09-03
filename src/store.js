import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './features/drawer/drawerSlice';
import loginReducer from './features/form/loginSlice';
import signupReducer from './features/form/signupSlice';
import productsReducer from './features/products/productsSlice';
import searchReducer from './features/search/searchSlice';
import productsUrlReducer from './features/urls/productsUrl/productsUrlSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        signup: signupReducer,
        login: loginReducer,
        products: productsReducer,
        search: searchReducer,
        productsUrl: productsUrlReducer,
        cart: cartReducer,
    },
});
