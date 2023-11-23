import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LessonMethod({ isVisible, setIsVisible, isValue, setValue }) {
    const [lessonMethod, setLessonMethod] = useState("");
    const shadeRef = useRef(null);

    useEffect(() => {
        setLessonMethod(isValue);
    }, [isValue, isVisible]);

    console.log(lessonMethod);

    const lessonMethodsRender = ["Remote", "In-Person", "Hybrid"].map(
        (method, n) => {
            const isCurrentMethod = lessonMethod === method;

            return (
                <div
                    className="d-flex justify-content-start align-items-center"
                    key={n}
                    style={{
                        width: "100%",
                        height: "67.53px",
                        marginBottom: "10px",
                        backgroundColor: isCurrentMethod
                            ? "#5bca8d"
                            : "#F7F7F7",
                        borderRadius: "5px",
                        color: isCurrentMethod ? "#fff" : "#999",
                        padding: "20px",
                        cursor: "pointer",
                    }}
                    onClick={() => setLessonMethod(method)}
                >
                    <FontAwesomeIcon
                        icon="circle-check"
                        style={{
                            width: "26px",
                            height: "26px",
                            marginRight: "5px",
                            color: isCurrentMethod ? "#fff" : "#999",
                        }}
                    />
                    {method}
                </div>
            );
        }
    );

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            ref={shadeRef}
            onClick={(e) => {
                if (e.target === shadeRef.current) {
                    setIsVisible(false);
                }
            }}
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.5)",
                zIndex: "999",
                pointerEvents: isVisible ? "auto" : "none",
                opacity: isVisible ? "1" : "0",
            }}
        >
            <div
                style={{
                    width: "452px",
                    background: "#fff",
                    padding: "24px",
                    borderRadius: "32px",
                    fontWeight: "bold",
                }}
            >
                <h1
                    className="m-0"
                    style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        lineHeight: "32px",
                        position: "relative",
                        paddingBottom: "32px",
                    }}
                >
                    Lesson method
                </h1>
                <div style={{ padding: "0 16px" }}>
                    {lessonMethodsRender}
                    <div
                        className="d-flex justify-content-around align-items-center"
                        style={{
                            marginTop: "32px",
                        }}
                    >
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                width: "115.53px",
                                height: "48px",
                                fontWeight: "600",
                                borderRadius: "22px",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                setIsVisible(false);
                            }}
                        >
                            Cancel
                        </div>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                width: "115.53px",
                                height: "48px",
                                background: "#35b234",
                                borderRadius: "22px",
                                fontWeight: "600",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                if (lessonMethod) {
                                    setValue(lessonMethod);
                                    setIsVisible(false);
                                }
                            }}
                        >
                            Add
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessonMethod;
