import MainLayout from "components/Layout/MainLayout";
import Navbar from "components/Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "components/Footer/Footer";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";
import LoginPopUp from "components/Layout/LoginPopUp/LoginPopUp";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const colorTheme = useFetchColorTheme();
    const buttonsConfig = useFetch("navbar")[1].buttons;
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [fromState, setFromState] = useState(location.state);

    console.log(fromState);
    // later implement => if(fromState) after login, go to the fromState page
    useEffect(() => {
        if (fromState) {
            setIsLoginVisible(true);
            navigate(".", { replace: true });
        }
    }, []);

    return (
        <>
            <MainLayout
                header={
                    <Navbar
                        name={"StudentTutor"}
                        colorTheme={colorTheme}
                        buttonsConfig={buttonsConfig}
                        setIsLoginVisible={setIsLoginVisible}
                        setFromState={setFromState}
                    />
                }
                content={<Main />}
                footer={<Footer />}
            />
            <LoginPopUp
                isLoginVisible={isLoginVisible}
                setIsLoginVisible={setIsLoginVisible}
            />
        </>
    );
}

export default HomePage;
