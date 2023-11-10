import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import HomePage from "pages/HomePage/HomePage";
import TestPage from "pages/TestPage/TestPage";
import getIcons from "config/getIcons";
import useFetchColorTheme from "hooks/useFetchColorTheme";

function App() {
    // add icons
    library.add(getIcons());
    // set body background & font color
    const fetchColorTheme = useFetchColorTheme();
    document.body.style.background = fetchColorTheme.secondary;
    document.body.style.color = fetchColorTheme.font;

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* If not logged in dont render chat and profile pages instead, load homepage with login popup then if login successful go to the original intended page if not stay in homepage */}
            <Route
                path="/testPage"
                element={
                    isLoggedIn ? <TestPage /> : <Navigate to="/" replace />
                }
            />
        </Routes>
    );
}

export default App;
