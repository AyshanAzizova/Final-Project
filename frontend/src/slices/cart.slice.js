// cart.slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart", 
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        addToCart:(state,action)=> {},

        increaseQuantity: (state, action) => {
            const item = state.cart.find(item => item._id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find(item => item._id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= action.payload.quantity;
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item._id !== action.payload.id);
        },
    },
});

export const { setCart, increaseQuantity, decreaseQuantity, removeItem, addToCart } = cartSlice.actions;

export default cartSlice.reducer;