function useFetchColorTheme(value) {
    const data = require("../config/config.json");
    const colorTheme = data.colorTheme.filter((theme) => {
        return theme.name === value;
    });

    return colorTheme[0];
}

export default useFetchColorTheme;
