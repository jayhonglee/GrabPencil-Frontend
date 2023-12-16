import MainLayout from "components/Layout/MainLayout";
import Navbar from "components/Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "components/Footer/Footer";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";
import LoginPopUp from "components/LoginPopUp/LoginPopUp";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage({
    isLoggedIn,
    fromState,
    setFromState,
    isLoginVisible,
    setIsLoginVisible,
}) {
    const location = useLocation();
    const navigate = useNavigate();
    const colorTheme = useFetchColorTheme();
    const buttonsConfig = useFetch("navbar")[1].buttons;

    useEffect(() => {
        setFromState(location.state);
        if (location.state) {
            setIsLoginVisible(true);
            navigate(".", { replace: true });
        }
    }, []);

    return (
        <>
            <MainLayout
                header={
                    <Navbar
                        name={"GrabPencil ✏️"}
                        colorTheme={colorTheme}
                        buttonsConfig={buttonsConfig}
                        setIsLoginVisible={setIsLoginVisible}
                        setFromState={setFromState}
                        isLoggedIn={isLoggedIn}
                    />
                }
                content={
                    <Main
                        setIsLoginVisible={setIsLoginVisible}
                        setFromState={setFromState}
                    />
                }
                // footer={<Footer />}
            />
            <LoginPopUp
                isLoginVisible={isLoginVisible}
                setIsLoginVisible={setIsLoginVisible}
                fromState={fromState}
                setFromState={setFromState}
            />
        </>
    );
}

export default HomePage;
