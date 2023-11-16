import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import TutorProfileContent from "./TutorProfileContent/TutorProfileContent";

function Main({ setIsLoggedIn }) {
    const [currentButton, setCurrentButton] = useState("My Tutor Profiles");
    const contentWrapper = {
        padding: "16px",
    };

    return (
        <>
            <Navigation
                currentButton={currentButton}
                setCurrentButton={setCurrentButton}
            />
            <div style={contentWrapper}>
                {currentButton === "My Tutor Profiles" ? (
                    <TutorProfileContent setIsLoggedIn={setIsLoggedIn} />
                ) : (
                    <div>My Account</div>
                )}
            </div>
        </>
    );
}

export default Main;
