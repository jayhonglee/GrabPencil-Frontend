import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "lightMode",
};

export const colorThemeSlice = createSlice({
    name: "colorTheme",
    initialState,
    reducers: {
        toggle: (state) => {
            if (state.theme === "lightMode") state.theme = "darkMode";
            else state.theme = "lightMode";
        },
    },
});

export const { toggle } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;
