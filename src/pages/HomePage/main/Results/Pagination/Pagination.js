import useFetchColorTheme from "hooks/useFetchColorTheme";

function Pagination() {
    const colorTheme = useFetchColorTheme();

    const listStyle = {
        background: colorTheme.primary,
        color: colorTheme.font,
    };

    return (
        <nav
            className="d-flex justify-content-center align-items-center mt-3"
            aria-label="Page navigation example"
        >
            <ul className="pagination pagination-lg m-0">
                <li className="page-item">
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Previous"
                        style={listStyle}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" style={listStyle}>
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" style={listStyle}>
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" style={listStyle}>
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a
                        className="page-link"
                        href="#"
                        aria-label="Next"
                        style={listStyle}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
