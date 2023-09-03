import MainLayout from "components/Layout/MainLayout";
import Navbar from "components/Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "components/Footer/Footer";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";

function HomePage() {
    const colorTheme = useFetchColorTheme();
    const buttonsConfig = useFetch("navbar")[1].buttons;

    return (
        <MainLayout
            header={
                <Navbar
                    name={"StudentTutor"}
                    colorTheme={colorTheme}
                    buttonsConfig={buttonsConfig}
                />
            }
            content={<Main />}
            footer={<Footer />}
        />
    );
}

export default HomePage;
