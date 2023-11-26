import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";
import Navbar from "components/Navbar/Navbar";
import Main from "./Main/Main";
import MainLayout from "components/Layout/MainLayout";

function MessagesPage({ isLoggedIn, setFromState }) {
    const colorTheme = useFetchColorTheme();
    const buttonsConfig = useFetch("navbar")[1].buttons;

    return (
        <MainLayout
            header={
                <Navbar
                    name={"StudentTutor"}
                    colorTheme={colorTheme}
                    buttonsConfig={buttonsConfig}
                    setFromState={setFromState}
                    isLoggedIn={isLoggedIn}
                />
            }
            content={<Main />}
            footer={<div></div>}
        />
    );
}

export default MessagesPage;
