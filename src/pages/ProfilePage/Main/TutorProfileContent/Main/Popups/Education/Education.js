import { useRef } from "react";
import "./Education.css";

function Education({ isVisible, setIsVisible, isValue, setValue }) {
    const shadeRef = useRef(null);

    const sortedEducation = isValue?.slice().sort((a, b) => {
        return b.startDateYear - a.startDateYear;
    });

    const renderEducation = sortedEducation?.map((edu, n) => {
        return (
            <div
                key={n}
                className="text-start educationList"
                style={{
                    padding: "16px 24px",
                    border: "1px solid rgb(217, 217, 217)",
                    fontSize: "16px",
                    borderRadius: "32px",
                    marginBottom: "16px",
                    maxHeight: "60vh",
                }}
            >
                {edu.school} <br />
                <div style={{ fontSize: "14px", fontWeight: "400" }}>
                    {edu.degree ? `${edu.degree} - ` : ""}
                    {edu.major} <br />
                </div>
                <div
                    style={{
                        fontSize: "14px",
                        fontWeight: "400",
                    }}
                >
                    {edu.startDateMonth} {edu.startDateYear} -{" "}
                    {edu.endDateMonth} {edu.endDateYear}
                </div>
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
                    Education
                </h1>
                <div
                    className="scroll-content"
                    style={{
                        maxHeight: "60vh",
                        overflow: "auto",
                        padding: "0 16px",
                    }}
                >
                    {renderEducation}
                </div>
                <div style={{ padding: "0 16px" }}>
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
                            onClick={() => {}}
                        >
                            Add
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
