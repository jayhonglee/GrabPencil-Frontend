import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import getIcons from "config/getIcons";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import HomePage from "pages/HomePage/HomePage";
import AboutPage from "pages/AboutPage/AboutPage";
import MessagesPage from "pages/MessagesPage/MessagesPage";
import ProfilePage from "pages/ProfilePage/ProfilePage";

function App() {
    const storageIsLoggedIn = localStorage.getItem("isLoggedIn");
    const [isLoggedIn, setIsLoggedIn] = useState(storageIsLoggedIn);

    useEffect(() => {
        function checkUserData() {
            setIsLoggedIn(localStorage.getItem("isLoggedIn"));
        }

        window.addEventListener("storage", checkUserData);

        return () => {
            window.removeEventListener("storage", checkUserData);
        };
    }, []);

    // add icons
    library.add(getIcons());
    // set body background & font color
    const fetchColorTheme = useFetchColorTheme();
    document.body.style.background = fetchColorTheme.secondary;
    document.body.style.color = fetchColorTheme.font;

    const isLoggedInCheck = () => {
        return isLoggedIn === "true";
    };

    return (
        <Routes>
            <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
            {/* If not logged in dont render chat and profile pages instead, load homepage with login popup then if login successful go to the original intended page if not stay in homepage */}
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route
                path="/messagesPage"
                element={
                    isLoggedInCheck() ? (
                        <MessagesPage />
                    ) : (
                        <Navigate to="/" state={"messagesPage"} replace />
                    )
                }
            />
            <Route
                path="/profilePage"
                element={
                    isLoggedInCheck() ? (
                        <ProfilePage />
                    ) : (
                        <Navigate to="/" state={"profilePage"} replace />
                    )
                }
            />
        </Routes>
    );
}

export default App;
