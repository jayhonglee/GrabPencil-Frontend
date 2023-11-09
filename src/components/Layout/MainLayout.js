import { useState } from "react";
import LoginPopUp from "./LoginPopUp/LoginPopUp";

function MainLayout({ header, content, footer }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log("hi");

    return (
        <div className="text-center container-fluid">
            <div className="row">{header}</div>
            <div className="row">{content}</div>
            <div className="row">{footer}</div>
            <LoginPopUp />
        </div>
    );
}

export default MainLayout;
