function useFetch(value) {
    const data = require("../config/config.json");

    return data[value];
}

export default useFetch;
