import CircleButtonsRender from "./CircleButtonsRender/CircleButtonsRender";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({
    name,
    colorTheme,
    buttonsConfig,
    setIsLoginVisible,
    setFromState,
    isLoggedIn,
}) {
    const [mouseHover, setMouseHover] = useState(false);
    const navigate = useNavigate();

    const buttonsContainer = {
        paddingRight: "16px",
    };
    const navbarBrand = {
        paddingLeft: "16px",
        fontSize: "22px",
        cursor: mouseHover && "pointer",
    };
    const navBar = {
        background: colorTheme.primary,
        boxShadow: `0 1px 1px 0 rgba(0, 0, 0, 0.2)`,
    };

    const handleDivClick = () => {
        // window.location.reload();
        navigate("/", { replace: true });
    };

    return (
        <nav
            className="navbar container-fluid d-flex justify-content-between"
            style={navBar}
        >
            <div
                style={navbarBrand}
                onClick={handleDivClick}
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
            >
                {name}
            </div>
            <div
                className="d-flex justify-content-between"
                style={buttonsContainer}
            >
                <CircleButtonsRender
                    buttonsConfig={buttonsConfig}
                    colorTheme={colorTheme}
                    setIsLoginVisible={setIsLoginVisible}
                    setFromState={setFromState}
                    isLoggedIn={isLoggedIn}
                />
            </div>
        </nav>
    );
}

export default Navbar;
