import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Subjects.css";

function Subjects({ isVisible, setIsVisible, isValue, setValue }) {
    const [isAddSubject, setIsAddSubject] = useState(false);
    const [subject, setSubject] = useState("");
    const [level, setLevel] = useState("");
    const shadeRef = useRef(null);

    useEffect(() => {
        setIsAddSubject(false);
    }, [isValue]);

    useEffect(() => {
        setSubject("");
        setLevel("");
    }, [isAddSubject]);

    const renderSubjects = isValue?.map((sub, n) => {
        const subjectStyle = {
            margin: "16px 0",
            width: "100%",
            height: "56px",
            padding: "16px 24px",
            border: "solid rgb(217, 217, 217) 1px",
            borderRadius: "32px",
            fontSize: "14px",
            fontWeight: "600",
        };

        return (
            <div
                key={n}
                style={subjectStyle}
                className="d-flex justify-content-between text-start subjectList"
                onClick={() => {
                    const updatedValue = isValue.filter(
                        (_, index) => index !== n
                    );
                    if (updatedValue.length === 0) return;
                    setValue(updatedValue);
                }}
            >
                <span
                    style={{
                        maxWidth: "50%",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >
                    {sub.subject}
                </span>
                <span
                    style={{
                        maxWidth: "50%",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >
                    {sub.teachingLevels}
                </span>
            </div>
        );
    });

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            ref={shadeRef}
            onClick={(e) => {
                if (e.target === shadeRef.current) {
                    setIsVisible(false);
                    setIsAddSubject(false);
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
                    }}
                >
                    Subjects
                    {isAddSubject && (
                        <span
                            style={{
                                position: "absolute",
                                left: "0",
                                height: "100%",
                                cursor: "pointer",
                            }}
                            onClick={() => setIsAddSubject(false)}
                        >
                            <FontAwesomeIcon
                                icon="arrow-left"
                                style={{
                                    width: "16px",
                                    height: "100%",
                                }}
                            />
                        </span>
                    )}
                </h1>
                {isAddSubject ? (
                    <div style={{ padding: "0 16px" }}>
                        <div
                            className="text-start"
                            style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                marginTop: "32px",
                            }}
                        >
                            Subject
                        </div>
                        <textarea
                            placeholder="ex) Mathematics, Science, History, English"
                            className="txtarea"
                            style={{
                                width: "100%",
                                height: "53px",
                                marginTop: "16px",
                                overflow: "hidden",
                                borderRadius: "20px",
                                padding: "16px",
                                resize: "none",
                                border: "none",
                                background: "#f7f7f7",
                                whiteSpace: "nowrap",
                            }}
                            onChange={(e) => {
                                const value = e.target.value.trim();
                                setSubject(value);
                            }}
                        />
                        <div
                            className="text-start"
                            style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                marginTop: "32px",
                            }}
                        >
                            Teaching Level
                        </div>
                        <textarea
                            placeholder="ex) Middle School, High School, Any level"
                            className="txtarea"
                            style={{
                                width: "100%",
                                height: "53px",
                                marginTop: "16px",
                                overflow: "hidden",
                                borderRadius: "20px",
                                padding: "16px",
                                resize: "none",
                                border: "none",
                                background: "#f7f7f7",
                                whiteSpace: "nowrap",
                            }}
                            onChange={(e) => {
                                const value = e.target.value.trim();
                                setLevel(value);
                            }}
                        />
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
                                    setIsAddSubject(false);
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
                                    if (subject && level && isValue) {
                                        setValue([
                                            ...isValue,
                                            {
                                                subject,
                                                teachingLevels: level,
                                            },
                                        ]);
                                    } else if (subject && level) {
                                        setValue([
                                            {
                                                subject,
                                                teachingLevels: level,
                                            },
                                        ]);
                                    }
                                }}
                            >
                                Add
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className="scroll-content"
                        style={{
                            padding: "0 16px",
                            maxHeight: "60vh",
                            overflow: "auto",
                        }}
                    >
                        <div
                            className="text-start"
                            style={{
                                padding: "16px",
                                margin: "14px 0",
                                width: "100%",
                                height: "56px",
                                borderRadius: "24px",
                                background: "#E8F2FF",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#157dfe",
                            }}
                        >
                            Add a subject
                        </div>
                        <div
                            className="d-flex justify-content-end align-items-center"
                            style={{
                                fontSize: "14px",
                                fontWeight: "600",
                            }}
                        >
                            <span
                                className="d-flex align-items-center"
                                style={{ cursor: "pointer" }}
                                onClick={() => setIsAddSubject(true)}
                            >
                                Add a subject
                                <FontAwesomeIcon
                                    icon="circle-plus"
                                    className="ms-2"
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        color: "#35b234",
                                    }}
                                />
                            </span>
                        </div>
                        {renderSubjects}
                        {renderSubjects?.length >= 2 && (
                            <div
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    margin: "16px 0",
                                }}
                            >
                                <b>Tip: </b>Remove an item from the list by
                                clicking on it.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Subjects;
