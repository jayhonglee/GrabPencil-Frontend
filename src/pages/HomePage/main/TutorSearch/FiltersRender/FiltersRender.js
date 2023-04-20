import useFetch from "hooks/useFetch";
import useFetchColorTheme from "hooks/useFetchColorTheme";

function FiltersRender() {
    const fetchFilters = useFetch("filters");
    const colorTheme = useFetchColorTheme();

    const buttonStyle = {
        border: `1px solid ${colorTheme.point}`,
        // background: "#FFBA49",
        color: colorTheme.point,
    };
    const listStyle = {
        color: colorTheme.font,
    };

    const filtersRender = fetchFilters.map((filter) => {
        return (
            <div className="pb-2 pe-2" key={filter.key}>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={buttonStyle}
                    >
                        {filter.name}
                    </button>
                    <ul className="dropdown-menu">
                        {filter.list.map((list) => {
                            return (
                                <li key={list.key}>
                                    <a
                                        className="dropdown-item"
                                        href="/"
                                        style={listStyle}
                                    >
                                        {list.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    });

    return <div className="d-flex flex-wrap">{filtersRender}</div>;
}

export default FiltersRender;
