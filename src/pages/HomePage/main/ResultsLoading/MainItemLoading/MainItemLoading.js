import MainItemCardLoading from "./MainItemCardLoading/MainItemCardLoading";

function MainItemLoading() {
    const shimmerStyle = {
        background: "#f6f6f6",
        background:
            "linear-gradient(90deg, #f6f6f6 25%, #ededed 37%, #f6f6f6 63%)",
        backgroundSize: "1000px 100%",
        animation: "shimmer 2s infinite linear",
    };

    const cardStyle = {
        width: "100%",
        height: "95vh",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: "1rem",
        border: "1px solid transparent",
        ...shimmerStyle,
    };

    const headerStyle = {
        position: "relative",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        zIndex: "1",
    };

    const inHeaderOneStyle = {
        width: "100%",
        height: "6rem",
    };

    const inHeaderTwoStyle = {
        background: "#fff",
        width: "100%",
        textAlign: "left",
    };

    const inHeaderCircleStyle = {
        width: "7rem",
        height: "7rem",
        background: "#fff",
        borderRadius: "100%",
        position: "absolute",
        top: "6rem",
        left: "3%",
        transform: "translateY(-3.5rem)",
        ...shimmerStyle,
    };

    return (
        <div
            id="profileCard"
            className="card border-0 mt-3 d-flex flex-column"
            style={cardStyle}
        >
            <style>
                {`
                @keyframes shimmer {
                    0% {
                        background-position: -468px 0;
                    }
                    100% {
                        background-position: 468px 0;
                    }
                }
                `}
            </style>
            <div className="d-flex flex-column" style={headerStyle}>
                <div style={inHeaderOneStyle} />
                <div className="py-2 px-4" style={inHeaderTwoStyle}>
                    <div className="d-flex justify-content-end pb-3">
                        <div
                            style={{
                                ...shimmerStyle,
                                width: "86.25px",
                                height: "36px",
                            }}
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div
                                style={{
                                    width: "102.53px",
                                    height: "15px",
                                    ...shimmerStyle,
                                }}
                            />
                            <div
                                className="mt-2 mb-3"
                                style={{
                                    width: "58.59px",
                                    height: "15px",
                                    ...shimmerStyle,
                                }}
                            />
                        </div>
                        <div
                            style={{
                                width: "102.53px",
                                height: "15px",
                                ...shimmerStyle,
                            }}
                        />
                    </div>
                </div>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={inHeaderCircleStyle}
                />
            </div>
            <MainItemCardLoading />
            <MainItemCardLoading />
            <MainItemCardLoading />
        </div>
    );
}

export default MainItemLoading;
