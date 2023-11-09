import useFetch from "hooks/useFetch";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import "./FiltersRender.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function FiltersRender({ setFunctions, filterParams }) {
    const [mouseHover, setMouseHover] = useState(false);
    const fetchFilters = useFetch("filters");
    const colorTheme = useFetchColorTheme();

    const buttonStyle = {
        border: `1px solid ${colorTheme.point}`,
        color: colorTheme.point,
        borderRadius: "0.375rem",
    };

    const listStyle = {
        color: colorTheme.font,
        cursor: mouseHover && "pointer",
        userSelect: "none",
    };

    const filtersRender = fetchFilters.map((filter) => {
        const filterType = filter.name.replace(/\s+/g, "");

        return (
            <div className="pb-2 pe-2" key={filter.key}>
                <div className="btn-group">
                    <button
                        type="button"
                        className={
                            filterParams[`current${filterType}Param`]
                                ? "btn"
                                : "btn dropdown-toggle"
                        }
                        data-bs-toggle={
                            filterParams[`current${filterType}Param`] ||
                            "dropdown"
                        }
                        aria-expanded="false"
                        style={{
                            ...buttonStyle,
                            background:
                                filterParams[`current${filterType}Param`] &&
                                "#35B234",
                            color: filterParams[`current${filterType}Param`]
                                ? "#fff"
                                : "#35B234",
                        }}
                        onClick={() => {
                            if (filterParams[`current${filterType}Param`]) {
                                setFunctions[`setCurrent${filterType}Param`](
                                    ""
                                );
                            }
                        }}
                    >
                        {filterParams[`current${filterType}Param`] ||
                            filter.name}
                        {filterParams[`current${filterType}Param`] && (
                            <FontAwesomeIcon
                                className="ms-2"
                                icon="x"
                                color="#fff"
                                size="xs"
                            />
                        )}
                    </button>
                    <ul
                        className={`dropdown-menu ${
                            filterParams[`current${filterType}Param`] && "hide"
                        }`}
                        style={{
                            maxHeight: "500px",
                            overflowY: "auto",
                        }}
                    >
                        {filter.list.map((list) => {
                            return (
                                <li key={list.key}>
                                    <div
                                        style={listStyle}
                                        className="dropdown-item listItem"
                                        tabIndex="0"
                                        onMouseEnter={() => {
                                            setMouseHover(true);
                                        }}
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
