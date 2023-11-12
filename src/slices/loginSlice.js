import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
        toggle: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
    },
});

export const { login, logout, toggle } = loginSlice.actions;

export default loginSlice.reducer;
