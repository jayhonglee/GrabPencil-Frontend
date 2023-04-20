import SearchbarsRender from "./SearchbarsRender/SearchbarsRender";
import FiltersRender from "./FiltersRender/FiltersRender";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";

function TutorSearch() {
    const colorTheme = useFetchColorTheme();
    const fetchButtonText = useFetch("searchbar")[2].buttons[0].text;

    const form = {
        height: "44px",
    };

    const button = {
        background: colorTheme.point,
        textAlign: "center",
        border: "none",
        fontWeight: "600",
    };

    return (
        <div className="text-center container-fluid p-0">
            <form
                className="col d-flex justify-content-between mb-4"
                style={form}
            >
                <SearchbarsRender />
                <button
                    type="button"
                    className="btn btn-primary"
                    style={button}
                >
                    {fetchButtonText}
                </button>
            </form>
            <div className="col mb-3">
                <FiltersRender />
            </div>
        </div>
    );
}

export default TutorSearch;
