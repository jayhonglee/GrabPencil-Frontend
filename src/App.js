import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import useCookie from "hooks/useCookie";
import axios from "axios";
import getIcons from "config/getIcons";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import HomePage from "pages/HomePage/HomePage";
import AboutPage from "pages/AboutPage/AboutPage";
import MessagesPage from "pages/MessagesPage/MessagesPage";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const storageIsLoggedIn = localStorage.getItem("isLoggedIn");
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem("isLoggedIn") === "true"
    );
    const [fromState, setFromState] = useState(location.state);
    const getCookie = useCookie;

    useEffect(() => {
        async function checkUserData() {
            try {
                const response = await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/checkAuthToken`,
                    {},
                    {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${getCookie("auth_token")}`,
                        },
                    }
                );

                if (response.status === 200) {
                    localStorage.setItem("isLoggedIn", "true");
                    setIsLoggedIn(true);
                    if (fromState) navigate(`/${fromState}`);
                    // console.log(isLoggedIn);
                } else {
                    localStorage.setItem("isLoggedIn", "false");
                    setIsLoggedIn(false);
                }
            } catch (e) {
                // setIsLoggedIn("false");
                localStorage.setItem("isLoggedIn", "false");
                setIsLoggedIn(false);
            }
        }

        window.addEventListener("storage", checkUserData);

        return () => {
            window.removeEventListener("storage", checkUserData);
        };
    }, [fromState]);

    // add icons
    library.add(getIcons());
    // set body background & font color
    const fetchColorTheme = useFetchColorTheme();
    document.body.style.background = fetchColorTheme.secondary;
    document.body.style.color = fetchColorTheme.font;

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomePage
                        isLoggedIn={storageIsLoggedIn}
                        fromState={fromState}
                        setFromState={setFromState}
                        state={"hi"}
                    />
                }
            />
            {/* If not logged in dont render chat and profile pages instead, load homepage with login popup then if login successful go to the original intended page if not stay in homepage */}
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route
                path="/messagesPage"
                element={
                    isLoggedIn ? (
                        <MessagesPage />
                    ) : (
                        <Navigate to="/" state={"messagesPage"} replace />
                    )
                }
            />
            <Route
                path="/profilePage"
                element={
                    isLoggedIn ? (
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
