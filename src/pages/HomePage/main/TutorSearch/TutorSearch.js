import SearchbarsRender from "./SearchbarsRender/SearchbarsRender";

function TutorSearch() {
    const form = {
        height: "44px",
    };

    const button = {
        background: "#1B74E4",
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
                    Find tutors
                </button>
            </form>
            <div className="col">filter</div>
        </div>
    );
}

export default TutorSearch;
