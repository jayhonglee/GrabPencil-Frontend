import { Route, Routes } from "react-router-dom";
import TestPage from "pages/TestPage/TestPage";
import "./App.css";
import HomePage from "pages/HomePage/HomePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCircleQuestion,
    faComment,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

function App() {
    library.add(faCircleQuestion, faComment, faUser);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/testPage" element={<TestPage />} />
        </Routes>
    );
}

export default App;
