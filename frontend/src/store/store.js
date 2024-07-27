import { configureStore } from '@reduxjs/toolkit';

// Slices
import userSlice from '../slices/user.slice.js';

const store = configureStore({
    reducer:{
        user:userSlice
    },
});

export default store;

