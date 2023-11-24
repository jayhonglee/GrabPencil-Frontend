import { useRef, useState, useEffect } from "react";
import "./AboutLesson.css";

function AboutLesson({ isVisible, setIsVisible, isValue, setValue }) {
    const [aboutLesson, setAboutLesson] = useState("");
    const shadeRef = useRef(null);

    useEffect(() => {
        setAboutLesson(isValue ? isValue : "");
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
                    About lesson
                </h1>
                <div style={{ padding: "0 16px" }}>
                    <textarea
                        className="scroll-content"
                        placeholder="ex) In my lessons, I focus on interactive learning, covering essential topics with engaging activities. I tailor each session to match your learning style for an effective and enjoyable experience."
                        style={{
                            width: "100%",
                            height: "120px",
                            borderRadius: "20px",
                            padding: "16px",
                            resize: "none",
                            border: "none",
                            background: "#f7f7f7",
                            marginBottom: "24px",
                        }}
                        onChange={(e) => {
                            const value = e.target.value;
                            setAboutLesson(value);
                        }}
                        value={aboutLesson}
                    />
                    <div
                        className="text-start"
                        style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                        <b>Tip: </b>Outline your teaching style, lesson
                        structure, and key topics succinctly. Highlight unique
                        methods or resources to give students a preview of your
                        engaging sessions.
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
                                if (aboutLesson.trim()) {
                                    setValue(aboutLesson.trim());
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

export default AboutLesson;
