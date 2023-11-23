import { useRef, useState, useEffect } from "react";

function LessonLocation({ isVisible, setIsVisible, isValue, setValue }) {
    const [lessonLocation, setLessonLocation] = useState("");
    const shadeRef = useRef(null);

    useEffect(() => {
        setLessonLocation(isValue ? isValue : "");
    }, [isValue]);

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
                    width: "672px",
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
                    Lesson location
                </h1>
                <div style={{ padding: "0 16px" }}>
                    <textarea
                        placeholder="ex) Burnaby North, North Burnaby, Coquitlam, Port Coquitlam, Port Moody around SFU, and West Point Grey, Kitsilano near UBC."
                        className="txtarea"
                        style={{
                            width: "100%",
                            height: "120px",
                            overflow: "hidden",
                            borderRadius: "20px",
                            padding: "16px",
                            resize: "none",
                            border: "none",
                            background: "#f7f7f7",
                            marginBottom: "24px",
                        }}
                        onChange={(e) => {
                            const value = e.target.value;
                            setLessonLocation(value);
                        }}
                        value={lessonLocation}
                    />
                    <div
                        className="text-start"
                        style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                        <b>Tips: </b>Boost your visibility by using broader
                        location terms that encompass your area's general region
                        or popular landmarks.
                    </div>
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
                                if (lessonLocation.trim()) {
                                    setValue(lessonLocation.trim());
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

export default LessonLocation;
