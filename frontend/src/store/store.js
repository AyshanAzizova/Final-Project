import { configureStore } from '@reduxjs/toolkit';

// Slices
import userSlice from '../slices/user.slice.js';
import cartSlice from '../slices/cart.slice.js';

const store = configureStore({
    reducer:{
        user:userSlice,
        cart:cartSlice
    },
});

export default store;

