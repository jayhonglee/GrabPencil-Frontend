import { useRef, useState, useEffect } from "react";
import "./HourlyRate.css";

function HourlyRate({ isVisible, setIsVisible, isValue, setValue }) {
    const [hourlyRate, setHourlyRate] = useState("");
    const shadeRef = useRef(null);

    useEffect(() => {
        setHourlyRate(isValue ? isValue : "");
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
                    Hourly rate
                </h1>
                <div style={{ position: "relative", padding: "0 16px" }}>
                    <textarea
                        className="scroll-content"
                        placeholder="ex) 17"
                        style={{
                            width: "100%",
                            height: "53px",
                            borderRadius: "20px",
                            padding: "16px",
                            resize: "none",
                            border: "none",
                            background: "#f7f7f7",
                            marginBottom: "24px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
                            setHourlyRate(value);
                        }}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                e.preventDefault(); // Disable newline on Enter
                            }
                        }}
                        value={hourlyRate}
                    />
                    <span
                        style={{
                            position: "absolute",
                            top: "16px",
                            right: "32px",
                        }}
                    >
                        $/h
                    </span>
                    <div
                        className="text-start"
                        style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                        <b>Tip: </b>Consider your expertise, level of
                        experience, and the local market rates when setting your
                        hourly rate. Strike a balance between competitive
                        pricing and the quality of your tutoring to attract
                        students while fairly valuing your expertise.
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
                                if (hourlyRate.trim()) {
                                    setValue(hourlyRate.trim());
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

export default HourlyRate;
