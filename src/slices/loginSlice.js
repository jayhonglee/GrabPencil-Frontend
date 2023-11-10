import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        toggle: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
    },
});

export const { toggle } = loginSlice.actions;

export default loginSlice.reducer;
