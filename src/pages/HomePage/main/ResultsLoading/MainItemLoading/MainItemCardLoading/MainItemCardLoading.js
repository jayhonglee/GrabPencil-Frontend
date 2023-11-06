function MainItemCardLoading() {
    const shimmerStyle = {
        background: "#f6f6f6",
        background:
            "linear-gradient(90deg, #f6f6f6 25%, #ededed 37%, #f6f6f6 63%)",
        backgroundSize: "1000px 100%",
        animation: "shimmer 2s infinite linear",
    };

    const innerCardStyle = {
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        border: "1px solid transparent",
    };

    return (
        <div
            style={{ width: "100%", height: "25%", background: "#f6f6f6" }}
            className="px-4 py-3"
        >
            <div
                className="card mb-3 px-4 py-3"
                style={{
                    ...innerCardStyle,
                    height: "100%",
                    background: "#fff",
                }}
            >
                <div
                    className="mb-2"
                    style={{
                        ...shimmerStyle,
                        width: "102.53px",
                        height: "15px",
                    }}
                />
                <div
                    className="mb-4"
                    style={{
                        ...shimmerStyle,
                        width: "58.59px",
                        height: "15px",
                    }}
                />
                <div
                    className="mb-2"
                    style={{
                        ...shimmerStyle,
                        width: "190.44px",
                        height: "15px",
                    }}
                />
                <div
                    className="mb-2"
                    style={{
                        ...shimmerStyle,
                        width: "219.73px",
                        height: "15px",
                    }}
                />
                <div
                    className="mb-2"
                    style={{
                        ...shimmerStyle,
                        width: "161.14px",
                        height: "15px",
                    }}
                />
            </div>
        </div>
    );
}

export default MainItemCardLoading;
