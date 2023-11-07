import Searchbar from "components/Searchbar/Searchbar";
import useFetch from "hooks/useFetch";
import useFetchColorTheme from "hooks/useFetchColorTheme";

function SearchbarsRender({ onChange }) {
    const fetchSearchbars = useFetch("searchbar");
    const fetchColorTheme = useFetchColorTheme();

    const div = {
        width: "44%",
    };

    const searchbarsRender = fetchSearchbars.map((searchbar) => {
        if (searchbar.buttons) return null;

        return (
            <div key={searchbar.key} style={div}>
                <Searchbar
                    colorTheme={fetchColorTheme}
                    label={searchbar.name}
                    placeholder={searchbar.placeholder}
                    icon={searchbar.icon}
                    name={searchbar.name}
                    onChange={onChange}
                />
            </div>
        );
    });

    return searchbarsRender;
}

export default SearchbarsRender;
