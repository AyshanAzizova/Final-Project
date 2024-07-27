import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName:"",
    email:"",
    password:"",
    _id:"",
    isAdmin :false,   
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            console.log(action.payload);
            console.log(state);
            state._id = action.payload._id;
            state.fullName = action.payload.fullName
            state.password = action.payload.password;
            state.email = action.payload.email
            state.isAdmin = action.payload.isAdmin
        },
        removeUser:(state,action)=>{
            state._id = "";
            state.fullName = "";
            state.password = "";
            state.email = "";
        }
    },

});

export const {setUser,removeUser} = userSlice.actions

export default userSlice.reducer