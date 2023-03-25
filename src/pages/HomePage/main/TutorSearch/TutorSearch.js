import SearchbarsRender from "./SearchbarsRender/SearchbarsRender";
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
        <div className="text-center container-fluid w-75">
            <form className="col d-flex justify-content-between" style={form}>
                <SearchbarsRender />
                <button
                    type="button"
                    className="btn btn-primary"
                    style={button}
                >
                    {fetchButtonText}
                </button>
            </form>
            <div className="col">filter</div>
        </div>
    );
}

export default TutorSearch;
