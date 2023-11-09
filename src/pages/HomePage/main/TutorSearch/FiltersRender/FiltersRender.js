import useFetch from "hooks/useFetch";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import { useState } from "react";

function FiltersRender({ setFunctions, filterParams }) {
    const [mouseHover, setMouseHover] = useState(false);
    const fetchFilters = useFetch("filters");
    const colorTheme = useFetchColorTheme();

    const buttonStyle = {
        border: `1px solid ${colorTheme.point}`,
        color: colorTheme.point,
    };

    const listStyle = {
        color: colorTheme.font,
        cursor: mouseHover && "pointer",
    };

    const filtersRender = fetchFilters.map((filter) => {
        const filterType = filter.name.replace(/\s+/g, "");

        return (
            <div className="pb-2 pe-2" key={filter.key}>
                <div className="btn-group">
                    <button
                        type="button"
                        className="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{
                            ...buttonStyle,
                            background:
                                filterParams[`current${filterType}Param`] &&
                                "#35B234",
                            color:
                                filterParams[`current${filterType}Param`] &&
                                "#fff",
                        }}
                    >
                        {filterParams[`current${filterType}Param`] ||
                            filter.name}
                    </button>
                    <ul className="dropdown-menu">
                        {filter.list.map((list) => {
                            return (
                                <li key={list.key}>
                                    <div
                                        className="dropdown-item"
                                        style={listStyle}
                                        onMouseEnter={() => setMouseHover(true)}
                                        onMouseLeave={() =>
                                            setMouseHover(false)
                                        }
                                        onClick={() => {
                                            setFunctions[
                                                `setCurrent${filterType}Param`
                                            ](list.name);
                                        }}
                                    >
                                        {list.name}
                                    </div>
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
