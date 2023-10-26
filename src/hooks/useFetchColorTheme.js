import { useSelector } from "react-redux";

function useFetchColorTheme() {
    const currentColorTheme = useSelector((state) => state.colorTheme.theme);

    const data = require("../config/config.json");
    const colorTheme = data.colorTheme.filter((theme) => {
        return theme.name === currentColorTheme;
    });

    return colorTheme[0];
}

export default useFetchColorTheme;
