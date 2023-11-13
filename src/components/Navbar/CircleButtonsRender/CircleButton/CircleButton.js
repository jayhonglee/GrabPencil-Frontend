import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCookie from "hooks/useCookie";
import axios from "axios";
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
    const [profileURL, setProfileURL] = useState(null);
    const getCookie = useCookie;

    useEffect(() => {
        async function getProfile() {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/checkAuthToken`,
                {},
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${getCookie("auth_token")}`,
                    },
                }
            );
            const userId = response.data.user._id;

            const profileURL = await axios
                .get(
                    `${process.env.REACT_APP_BASE_URL}/users/${userId}/avatar`,
                    { responseType: "arraybuffer" }
                )
                .then((response) => {
                    const blob = new Blob([response.data], {
                        type: "image/png",
                    });
                    const imageUrl = URL.createObjectURL(blob);
                    setProfileURL(imageUrl);
                });
        }

        if (isLoggedIn && buttonName === "profile") getProfile();
    }, [isLoggedIn]);

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
            {isLoggedIn && buttonName === "profile" ? (
                <img
                    className="rounded-circle circle-button"
                    alt="avatar1"
                    src={profileURL ? `${profileURL}` : `/images/no_avatar.png`}
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={isClicked || isTouched ? buttonPressed : button}
                />
            ) : (
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
            )}
        </Link>
    );
}

export default CircleButton;
