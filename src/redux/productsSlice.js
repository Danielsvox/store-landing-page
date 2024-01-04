// src/redux/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Define reducers and corresponding actions
        productsLoading(state) {
            state.isLoading = true;
        },
        productsReceived(state, action) {
            state.isLoading = false;
            state.products = action.payload;
        },
        productsError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { productsLoading, productsReceived, productsError } = productsSlice.actions;

export default productsSlice.reducer;
