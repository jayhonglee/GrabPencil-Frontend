import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleButton from "./CircleButton/CircleButton";

function Navbar() {
    const buttonsContainer = {
        width: "150px",
        paddingRight: "16px",
    };

    const navbarBrand = {
        paddingLeft: "16px",
    };

    return (
        <nav className="navbar bg-white container-fluid d-flex justify-content-between">
            <div className="navbar-brand" style={navbarBrand}>
                StudentTutor
            </div>
            <div
                className="d-flex justify-content-between"
                style={buttonsContainer}
            >
                <CircleButton
                    icon={
                        <FontAwesomeIcon icon="circle-question" color="black" />
                    }
                    link={"TestPage"}
                />
                <CircleButton
                    icon={<FontAwesomeIcon icon="comment" color="black" />}
                    link={"TestPage"}
                />
                <CircleButton
                    icon={<FontAwesomeIcon icon="user" color="black" />}
                    link={"TestPage"}
                />
            </div>
        </nav>
    );
}

export default Navbar;
