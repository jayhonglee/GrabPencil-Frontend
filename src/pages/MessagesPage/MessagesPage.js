import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
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
            content={<h1>Messages Page</h1>}
            footer={<Footer />}
        />
    );
}

export default MessagesPage;
