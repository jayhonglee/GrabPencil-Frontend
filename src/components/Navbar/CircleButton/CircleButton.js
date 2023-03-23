import { useState } from "react";
import { Link } from "react-router-dom";

function CircleButton({ icon, link }) {
    //use separate css file for hover on mouse and on click events its cleaner and dont need useStat hooks also for mobile if needed can easily add on touch event
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const button = {
        width: "40px",
        height: "40px",
        background: "var(--grey)",
    };

    const buttonHover = {
        ...button,
        filter: "brightness(90%)",
    };

    return (
        <Link to={`/${link}`}>
            <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={isHover ? buttonHover : button}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                    console.log("clicked");
                }}
            >
                {icon}
            </div>
        </Link>
    );
}

export default CircleButton;
