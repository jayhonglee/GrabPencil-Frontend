import { HashLoader } from "react-spinners";

function LoadingScreen() {
    return (
        <div
            style={{ width: "100vw", height: "100vh" }}
            className="d-flex justify-content-center align-items-center"
        >
            <HashLoader color="#35b234" />
        </div>
    );
}

export default LoadingScreen;
