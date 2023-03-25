import Searchbar from "components/Searchbar/Searchbar";
import useFetch from "hooks/useFetch";
import useFetchColorTheme from "hooks/useFetchColorTheme";

function SearchbarsRender() {
    const fetchSearchbars = useFetch("searchbar");
    const fetchColorTheme = useFetchColorTheme();

    const div = {
        width: "41%",
    };

    const searchbarsRender = fetchSearchbars.map((searchbar) => {
        return (
            <div key={searchbar.key} style={div}>
                <Searchbar
                    colorTheme={fetchColorTheme}
                    label={searchbar.name}
                    placeholder={searchbar.placeholder}
                    icon={searchbar.icon}
                />
            </div>
        );
    });

    return searchbarsRender;
}

export default SearchbarsRender;
