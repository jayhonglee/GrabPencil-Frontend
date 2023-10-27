import useFetchColorTheme from "hooks/useFetchColorTheme";
import { useState } from "react";

function PaginationItem({ item, currentPage, onClick }) {
    const colorTheme = useFetchColorTheme();
    const isCurrentPage = item == currentPage;
    const [isHovered, setIsHovered] = useState(false);

    const divStyle = {
        background:
            !isCurrentPage && isHovered
                ? "#e6e6e6"
                : isCurrentPage
                ? "#595959"
                : colorTheme.primary,
        transition: "background-color 0.3s",
        width: "50px",
        height: "50px",
        borderRadius: "8px",
    };

    const aStyle = {
        textDecoration: "none",
        display: "block",
        textAlign: "center",
        width: "100%",
        height: "100%",
        color: isCurrentPage ? "#fff" : "#2d2d2d",
        fontSize: "20px",
    };

    function scrollToTop() {
        window.scrollTo({
            top: 0,
        });
    }

    const handleClick = (e) => {
        e.preventDefault();
        scrollToTop();
        onClick();
    };

    return (
        <div
            style={divStyle}
            className="mx-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            <a
                href="#"
                style={aStyle}
                className="d-flex justify-content-center align-items-center"
            >
                <span aria-hidden="true">{item}</span>
            </a>
        </div>
    );
}

export default PaginationItem;
