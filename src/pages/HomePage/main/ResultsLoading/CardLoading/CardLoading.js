function CardLoading() {
    const shimmerStyle = {
        background: "#f6f6f6",
        background:
            "linear-gradient(90deg, #f6f6f6 25%, #ededed 37%, #f6f6f6 63%)",
        backgroundSize: "1000px 100%",
        animation: "shimmer 2s infinite linear",
    };

    const profileStyle = {
        background: "#f6f6f6",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        ...shimmerStyle,
    };

    const cardStyle = {
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        border: "1px solid transparent",
    };

    return (
        <div className="card mt-3" style={cardStyle}>
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
            <div className="card-body ps-0 pe-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 d-flex justify-content-center">
                            <div style={profileStyle} />
                        </div>
                        <div className="col-9">
                            <div className="text-start">
                                <div
                                    className="mb-2"
                                    style={{
                                        ...shimmerStyle,
                                        width: "35%",
                                        height: "15px",
                                    }}
                                />
                            </div>
                            <div
                                className="mb-4"
                                style={{
                                    ...shimmerStyle,
                                    width: "20%",
                                    height: "15px",
                                }}
                            />
                            <div
                                className="mb-2"
                                style={{
                                    ...shimmerStyle,
                                    width: "65%",
                                    height: "15px",
                                }}
                            />
                            <div
                                className="mb-2"
                                style={{
                                    ...shimmerStyle,
                                    width: "75%",
                                    height: "15px",
                                }}
                            />
                            <div
                                className="mb-2"
                                style={{
                                    ...shimmerStyle,
                                    width: "55%",
                                    height: "15px",
                                }}
                            />
                            <div
                                className="mb-2"
                                style={{
                                    ...shimmerStyle,
                                    width: "55%",
                                    height: "15px",
                                    background: "#fff",
                                }}
                            />
                            <div
                                className="mb-2"
                                style={{
                                    ...shimmerStyle,
                                    width: "55%",
                                    height: "15px",
                                    background: "#fff",
                                }}
                            />
                            <div
                                className="mb-2"
                                style={{
                                    ...shimmerStyle,
                                    width: "55%",
                                    height: "15px",
                                    background: "#fff",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardLoading;
