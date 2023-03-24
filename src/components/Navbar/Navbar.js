import useFetch from "hooks/useFetch";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import CircleButtonsRender from "./CircleButtonsRender/CircleButtonsRender";

function Navbar() {
    const fetchNavbar = useFetch("navbar");
    const fetchColorTheme = useFetchColorTheme("lightMode");

    const buttonsContainer = {
        paddingRight: "16px",
    };
    const navbarBrand = {
        paddingLeft: "16px",
        fontSize: "22px",
    };
    const navBar = {
        background: fetchColorTheme.primary,
    };

    return (
        <nav
            className="navbar container-fluid d-flex justify-content-between"
            style={navBar}
        >
            <div style={navbarBrand}>{fetchNavbar[0].name}</div>
            <div
                className="d-flex justify-content-between"
                style={buttonsContainer}
            >
                <CircleButtonsRender />
            </div>
        </nav>
    );
}

export default Navbar;
