import { configureStore } from "@reduxjs/toolkit";
import colorThemeSlice from "slices/colorThemeSlice";

export const store = configureStore({
    reducer: {
        colorTheme: colorThemeSlice,
    },
});
