import { useState } from "react";
import { Link } from "react-router-dom";
import "./circleButton.css";
import useFetchColorTheme from "hooks/useFetchColorTheme";

function CircleButton({ icon, link }) {
    const fetchColorTheme = useFetchColorTheme();
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
        background: fetchColorTheme.secondary,
    };

    const buttonPressed = {
        ...button,
        filter: "brightness(85%)",
        transform: "scale(0.90)",
    };

    return (
        <Link to={`/${link}`}>
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
