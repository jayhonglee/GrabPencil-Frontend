import useFetchColorTheme from "hooks/useFetchColorTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pagination({ paginationObject }) {
    console.log(paginationObject);

    const colorTheme = useFetchColorTheme();

    const divStyle = {
        background: colorTheme.primary,
        width: "66.89px",
        height: "68.85px",
        borderRadius: "8px",
    };

    const aStyle = {
        textDecoration: "none",
        display: "block",
        textAlign: "center",
        width: "100%",
        height: "100%",
        color: colorTheme.font,
        fontSize: "20px",
    };

    return (
        <nav className="d-flex justify-content-between align-items-center mt-4 px-1">
            <div style={divStyle}>
                <a
                    href="#"
                    style={aStyle}
                    className="d-flex justify-content-center align-items-center"
                >
                    <span aria-hidden="true">
                        <FontAwesomeIcon icon={"angle-left"} />
                    </span>
                </a>
            </div>
            <div style={divStyle}>
                <a
                    href="#"
                    style={aStyle}
                    className="d-flex justify-content-center align-items-center"
                >
                    <span aria-hidden="true">1</span>
                </a>
            </div>
            <div style={divStyle}>
                <a
                    href="#"
                    style={aStyle}
                    className="d-flex justify-content-center align-items-center"
                >
                    <span aria-hidden="true">2</span>
                </a>
            </div>
            <div style={divStyle}>
                <a
                    href="#"
                    style={aStyle}
                    className="d-flex justify-content-center align-items-center"
                >
                    <span aria-hidden="true">3</span>
                </a>
            </div>
            <div style={divStyle}>
                <a
                    href="#"
                    style={aStyle}
                    className="d-flex justify-content-center align-items-center"
                >
                    <span aria-hidden="true">4</span>
                </a>
            </div>
            <div style={divStyle}>
                <a
                    href="#"
                    style={aStyle}
                    className="d-flex justify-content-center align-items-center"
                >
                    <span aria-hidden="true">5</span>
                </a>
            </div>
            <div style={divStyle}>
                <a
                    href="#"
                    style={aStyle}
                    className="d-flex justify-content-center align-items-center"
                >
                    <span aria-hidden="true">
                        <FontAwesomeIcon icon={"angle-right"} />
                    </span>
                </a>
            </div>
        </nav>
    );
}

export default Pagination;
