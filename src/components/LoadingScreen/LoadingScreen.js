import { HashLoader } from "react-spinners";

function LoadingScreen() {
    return (
        <div
            style={{
                width: "100vw",
                height: "calc(100vh - 56px - 57px)",
                position: "absolute",
                background: "#fff",
                top: "0%",
                left: "0%",
            }}
            className="d-flex justify-content-center align-items-center"
        >
            <HashLoader color="#35b234" />
        </div>
    );
}

export default LoadingScreen;
