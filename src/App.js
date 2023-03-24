import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "pages/HomePage/HomePage";
import TestPage from "pages/TestPage/TestPage";
import getIcons from "config/getIcons";
import { library } from "@fortawesome/fontawesome-svg-core";

function App() {
    library.add(getIcons());

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/testPage" element={<TestPage />} />
        </Routes>
    );
}

export default App;
