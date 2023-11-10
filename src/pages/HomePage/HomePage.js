import MainLayout from "components/Layout/MainLayout";
import Navbar from "components/Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "components/Footer/Footer";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";
import { useState } from "react";
import LoginPopUp from "components/Layout/LoginPopUp/LoginPopUp";

function HomePage() {
    const colorTheme = useFetchColorTheme();
    const buttonsConfig = useFetch("navbar")[1].buttons;
    const [isLoginVisible, setIsLoginVisible] = useState(false);

    return (
        <>
            <MainLayout
                header={
                    <Navbar
                        name={"StudentTutor"}
                        colorTheme={colorTheme}
                        buttonsConfig={buttonsConfig}
                        setIsLoginVisible={setIsLoginVisible}
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
