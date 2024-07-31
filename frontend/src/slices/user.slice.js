import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    auth: false
};
const userData = localStorage.getItem('user');
if (userData) {
    try {
        const localUser = JSON.parse(userData);
        initialState.userId = localUser.userId;
        initialState.auth = localUser.auth;
    } catch (error) {
        console.error('Error parsing user data from localStorage', error);
    }
} else {
    localStorage.setItem('user', JSON.stringify(initialState));
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const userData = { userId: action.payload.id, auth: true };
            localStorage.setItem('user', JSON.stringify(userData));
            state.userId = action.payload.id;
            state.auth = true;
        },
        logout: (state) => {
            console.log('User logged out');
            localStorage.setItem('user', JSON.stringify({ userId: null, auth: false }));
            state.userId = null;
            state.auth = false;
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;