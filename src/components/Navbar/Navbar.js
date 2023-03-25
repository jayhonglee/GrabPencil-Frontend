import CircleButtonsRender from "./CircleButtonsRender/CircleButtonsRender";

function Navbar({ name, colorTheme, buttonsConfig }) {
    const buttonsContainer = {
        paddingRight: "16px",
    };
    const navbarBrand = {
        paddingLeft: "16px",
        fontSize: "22px",
    };
    const navBar = {
        background: colorTheme.primary,
        boxShadow: `0 0px 2px 0 rgba(0, 0, 0, 0.2)`,
    };

    return (
        <nav
            className="navbar container-fluid d-flex justify-content-between"
            style={navBar}
        >
            <div style={navbarBrand}>{name}</div>
            <div
                className="d-flex justify-content-between"
                style={buttonsContainer}
            >
                <CircleButtonsRender
                    buttonsConfig={buttonsConfig}
                    colorTheme={colorTheme}
                />
            </div>
        </nav>
    );
}

export default Navbar;
