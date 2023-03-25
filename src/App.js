import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import TestPage from "pages/TestPage/TestPage";
import getIcons from "config/getIcons";
import { library } from "@fortawesome/fontawesome-svg-core";
import useFetchColorTheme from "hooks/useFetchColorTheme";

function App() {
    // add icons
    library.add(getIcons());
    // set body background & font color
    const fetchColorTheme = useFetchColorTheme();
    document.body.style.background = fetchColorTheme.secondary;
    document.body.style.color = fetchColorTheme.font;

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/testPage" element={<TestPage />} />
        </Routes>
    );
}

export default App;
