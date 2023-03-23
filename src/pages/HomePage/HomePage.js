import MainLayout from "components/Layout/MainLayout";
import Navbar from "components/Navbar/Navbar";
import Main from "./main/Main";

function HomePage() {
    return (
        <MainLayout
            header={<Navbar />}
            content={<Main />}
            footer={<div>footer</div>}
        />
    );
}

export default HomePage;
