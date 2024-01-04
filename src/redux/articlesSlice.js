// src/redux/contactSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Assume you have an API utility to send contact information
import { sendContactForm } from '../api';

// Define the initial state for the form
const initialState = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
    error: null,
};

// Define an async thunk to handle form submission
export const submitContactForm = createAsyncThunk(
    'contact/submitContactForm',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await sendContactForm(formData);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

// Create slice
const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        // Reducers to handle form input changes
        setName: (state, action) => {
            state.name = action.payload;
        },
        setSurname: (state, action) => {
            state.surname = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        resetForm: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitContactForm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitContactForm.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(submitContactForm.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { setName, setSurname, setEmail, setPhone, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
