import { useState } from "react";
import { Link } from "react-router-dom";
import "./circleButton.css";

function CircleButton({
    icon,
    link,
    colorTheme,
    onClick,
    buttonName,
    isLoggedIn,
}) {
    const [isClicked, setIsClicked] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const handleMouseLeave = () => {
        setIsClicked(false);
    };
    const handleMouseDown = () => {
        setIsClicked(true);
    };
    const handleMouseUp = () => {
        setIsClicked(false);
    };
    const handleTouchStart = () => {
        setIsTouched(true);
    };
    const handleTouchMove = () => {
        setIsTouched(false);
    };
    const handleTouchEnd = () => {
        setIsTouched(false);
    };

    const button = {
        marginRight: "5px",
        width: "40px",
        height: "40px",
        background: colorTheme.secondary,
    };

    const buttonPressed = {
        ...button,
        filter: "brightness(85%)",
        transform: "scale(0.90)",
    };

    return (
        <Link
            onClick={onClick}
            to={isLoggedIn || buttonName === "about" ? `/${link}` : ""}
        >
            <div
                className="rounded-circle d-flex justify-content-center align-items-center circle-button"
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={isClicked || isTouched ? buttonPressed : button}
            >
                {icon}
            </div>
        </Link>
    );
}

export default CircleButton;
