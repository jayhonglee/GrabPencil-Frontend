import MainLayout from "components/Layout/MainLayout";
import Navbar from "components/Navbar/Navbar";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";
import Main from "./Main/Main";

function ProfilePage({ isLoggedIn, setFromState, setIsLoggedIn }) {
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
            content={<Main setIsLoggedIn={setIsLoggedIn} />}
            // footer={<div></div>}
        />
    );
}

export default ProfilePage;
