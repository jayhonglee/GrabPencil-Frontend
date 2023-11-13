import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import Content from "./Content/Content";

function Main({}) {
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
                <Content />
            </div>
        </>
    );
}

export default Main;
