function Loading({ isLoading }) {
    const shimmerStyle = {
        background: "#f6f6f6",
        background:
            "linear-gradient(90deg, #f6f6f6 25%, #ededed 37%, #f6f6f6 63%)",
        backgroundSize: "1000px 100%",
        animation: "shimmer 2s infinite linear",
    };

    const renderConversations = () => {
        const conversationsCount = 6;
        const conversationComponents = new Array(conversationsCount).fill(null);

        return conversationComponents.map((_, index) => (
            <div
                key={index}
                style={{
                    width: "100%",
                    height: "68px",
                    margin: "8px 0",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        ...shimmerStyle,
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        margin: "6px",
                    }}
                />
                <div style={{ padding: "6px" }}>
                    <div
                        style={{
                            ...shimmerStyle,
                            width: "110px",
                            height: "20px",
                            borderRadius: "50px",
                            marginBottom: "8px",
                        }}
                    />
                    <div
                        style={{
                            ...shimmerStyle,
                            width: "190px",
                            height: "16px",
                            borderRadius: "50px",
                        }}
                    />
                </div>
            </div>
        ));
    };

    return (
        <div
            className="messenger p-0 text-start"
            style={{
                width: "100%",
                opacity: isLoading ? "1" : "0",
                pointerEvents: !isLoading && "none",
                height: !isLoading && "0",
            }}
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
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <div
                        className="chatMenuInputWrapper"
                        style={{ paddingTop: "13px" }}
                    >
                        <div
                            // className="m-0"
                            style={{
                                ...shimmerStyle,
                                height: "36px",
                                width: "30%",
                                borderRadius: "5px",
                                margin: "0px",
                                marginLeft: "9px",
                            }}
                        ></div>
                        <input
                            placeholder=""
                            className="chatMenuInput"
                            style={{ ...shimmerStyle, pointerEvents: "none" }}
                        />
                    </div>
                    <div className="chatWrapper">{renderConversations()}</div>
                </div>
            </div>
            <div
                className="chatBox"
                style={{ backgroundColor: "#F0F2F5", overflow: "hidden" }}
            />
            <div
                className="chatOnline"
                style={{ backgroundColor: "#F0F2F5", overflow: "hidden" }}
            />
        </div>
    );
}

export default Loading;
