// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import contactReducer from './articlesSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        contact: contactReducer,
    },
});

export default store;
