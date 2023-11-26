import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import TutorProfileContent from "./TutorProfileContent/TutorProfileContent";
import AccountContent from "./AccountContent/AccountContent";

function Main({ setIsLoggedIn }) {
    const [currentButton, setCurrentButton] = useState("My Tutor Profiles");
    const contentWrapper = {
        padding: "16px",
        width: "100vw",
        height: "100%",
        background: currentButton === "My Tutor Profiles" && "#fff",
        position: "relative",
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
                    <AccountContent setIsLoggedIn={setIsLoggedIn} />
                )}
            </div>
        </>
    );
}

export default Main;
