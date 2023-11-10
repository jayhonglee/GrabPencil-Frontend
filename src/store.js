import { configureStore } from "@reduxjs/toolkit";
import colorThemeSlice from "slices/colorThemeSlice";
import loginSlice from "slices/loginSlice";

export const store = configureStore({
    reducer: {
        colorTheme: colorThemeSlice,
        login: loginSlice,
    },
});
