import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    auth: false
};

if (JSON.parse(localStorage.getItem('user'))) {
    const localUser = JSON.parse(localStorage.getItem('user'));
    initialState.userId = localUser.userId;
    initialState.auth = true;
}
else{
    localStorage.setItem('user',JSON.stringify({userId: null, auth: false}));
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            //set local
            localStorage.setItem('user', JSON.stringify({ userId: action.payload.id, auth: true }));
            state.userId = action.payload.id;
            state.auth = true;
        },
        logout: (state, action) => {
            console.log('test log out action')
            localStorage.setItem('user', JSON.stringify({userId:null, auth: false}));
            state.userId = null;
            state.auth = false;
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;