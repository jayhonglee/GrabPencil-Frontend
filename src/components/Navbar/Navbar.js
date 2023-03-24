import useFetch from "hooks/useFetch";
import CircleButtonsRender from "./RenderCircleButtons/CircleButtonsRender";

function Navbar() {
    const fetchNavbar = useFetch("navbar");

    const buttonsContainer = {
        width: "150px",
        paddingRight: "16px",
    };

    const navbarBrand = {
        paddingLeft: "16px",
    };

    const navBar = {
        background: "var(--primary)",
    };

    return (
        <nav
            className="navbar container-fluid d-flex justify-content-between"
            style={navBar}
        >
            <div className="navbar-brand" style={navbarBrand}>
                {fetchNavbar[0].name}
            </div>
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
