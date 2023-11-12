import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function GenderSelect({ gender, setGender, isRequired }) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHoveredOn, setIsHoveredOn] = useState(null);

    const selectStyle = {
        width: "100%",
        height: isFocused ? "196px" : "57px",
        backgroundColor: "#fff",
        borderRight: isFocused ? "1px solid #222" : "1px solid #e0e0e0",
        borderTop: isFocused ? "1px solid #222" : "1px solid #e0e0e0",
        borderBottom: isFocused ? "1px solid #222" : "1px solid #e0e0e0",
        borderLeft: isRequired
            ? "2px solid red"
            : isFocused
            ? "1px solid #222"
            : "1px solid #e0e0e0",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "600",
        color: "#999",
        lineHeight: "1",
        userSelect: "none",
        position: "absolute",
    };

    const arrowDownStyle = {
        color: "#999",
        pointerEvents: "none",
        rotate: isFocused && "180deg",
        transition: "all 0.3s",
    };

    const genderText = {
        height: "57px",
        padding: "18px",
        color: gender ? "black" : "#999",
    };

    const optionContainerStyle = {
        padding: "0 10px",
    };

    const optionStyle = {
        padding: "10px 8px",
        fontSize: "15px",
        height: "41px",
        borderRadius: "5px",
        lineHeight: "1",
    };

    return (
        <>
            <label
                style={{
                    position: "absolute",
                    left: "0",
                    transform: isFocused
                        ? "translateY(-100%)"
                        : "translateY(-80%)",
                    fontSize: "14px",
                    color: "#999",
                    fontWeight: "500",
                    transition: "all 0.3s",
                    opacity: isFocused ? 1 : 0,
                    userSelect: "none",
                }}
            >
                Gender
            </label>
            <div
                className="text-start"
                style={selectStyle}
                tabIndex={0}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                <div
                    className="d-flex justify-content-between"
                    style={genderText}
                    onClick={() => setIsFocused(true)}
                >
                    <span>{gender || "Gender"}</span>
                    <FontAwesomeIcon
                        className="btn p-0"
                        icon="angle-down"
                        style={arrowDownStyle}
                    />
                </div>
                {isFocused && (
                    <div style={optionContainerStyle}>
                        <div
                            style={{
                                ...optionStyle,
                                backgroundColor:
                                    isHoveredOn === "male" && "#F7F7F7",
                                color: isHoveredOn === "male" && "#222",
                            }}
                            onMouseEnter={() => setIsHoveredOn("male")}
                            onMouseLeave={() => setIsHoveredOn(null)}
                            onClick={() => {
                                setGender("Male");
                                setIsFocused(false);
                            }}
                        >
                            Male
                        </div>
                    </div>
                )}
                {isFocused && (
                    <div style={optionContainerStyle}>
                        <div
                            style={{
                                ...optionStyle,
                                backgroundColor:
                                    isHoveredOn === "female" && "#F7F7F7",
                                color: isHoveredOn === "female" && "#222",
                            }}
                            onMouseEnter={() => setIsHoveredOn("female")}
                            onMouseLeave={() => setIsHoveredOn(null)}
                            onClick={() => {
                                setGender("Female");
                                setIsFocused(false);
                            }}
                        >
                            Female
                        </div>
                    </div>
                )}
                {isFocused && (
                    <div style={optionContainerStyle}>
                        <div
                            style={{
                                ...optionStyle,
                                backgroundColor:
                                    isHoveredOn === "nonBinary" && "#F7F7F7",
                                color: isHoveredOn === "nonBinary" && "#222",
                            }}
                            onMouseEnter={() => setIsHoveredOn("nonBinary")}
                            onMouseLeave={() => setIsHoveredOn(null)}
                            onClick={() => {
                                setGender("Non-Binary");
                                setIsFocused(false);
                            }}
                        >
                            Non-Binary
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
