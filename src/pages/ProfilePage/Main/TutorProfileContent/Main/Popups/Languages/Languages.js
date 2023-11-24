import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import languageList from "../../../../../../../config/languageList";
import "./Languages.css";

function Languages({ isVisible, setIsVisible, isValue, setValue }) {
    const [isAddLanguage, setIsAddLanguage] = useState(false);
    const [language, setLanguage] = useState("");
    const [proficiency, setProficiency] = useState("");
    const shadeRef = useRef(null);

    console.log(language, proficiency);

    useEffect(() => {
        setIsAddLanguage(false);
    }, [isValue]);

    useEffect(() => {
        setLanguage("");
        setProficiency("");
    }, [isAddLanguage]);

    if (!Array.isArray(isValue)) {
        isValue = [];
    }

    const renderLanguageOptions = languageList.map((lang, n) => {
        return (
            <option key={n} value={lang}>
                {lang}
            </option>
        );
    });

    const renderProficiencyOptions = [
        "Native Speaker",
        "Fluent",
        "Advanced",
        "Intermediate",
        "Basic",
        "Beginner",
    ].map((prof, n) => {
        return (
            <option key={n} value={prof}>
                {prof}
            </option>
        );
    });

    const renderLanguages = isValue?.map((sub, n) => {
        const languageStyle = {
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
                style={languageStyle}
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
                        maxWidth: "47.5%",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >
                    {sub.language}
                </span>
                <span
                    style={{
                        maxWidth: "47.5%",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >
                    {sub.proficiency}
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
                    setIsAddLanguage(false);
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
                    Languages
                    {isAddLanguage && (
                        <span
                            style={{
                                position: "absolute",
                                left: "0",
                                height: "100%",
                                cursor: "pointer",
                            }}
                            onClick={() => setIsAddLanguage(false)}
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
                {isAddLanguage ? (
                    <div style={{ padding: "0 16px" }}>
                        <div
                            className="text-start"
                            style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                marginTop: "32px",
                            }}
                        >
                            Language
                        </div>
                        <select
                            className="form-select form-select-sm shadow-none"
                            aria-label="Small select example"
                            style={{
                                width: "100%",
                                height: "53px",
                                marginTop: "16px",
                                padding: "16px",
                                border: "none",
                                backgroundColor: "#f7f7f7",
                                cursor: "pointer",
                            }}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option defaultValue value={""}>
                                Open this select menu
                            </option>
                            {renderLanguageOptions}
                        </select>
                        <div
                            className="text-start"
                            style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                marginTop: "32px",
                            }}
                        >
                            Proficiency
                        </div>
                        <select
                            className="form-select form-select-sm shadow-none"
                            aria-label="Small select example"
                            style={{
                                width: "100%",
                                height: "53px",
                                marginTop: "16px",
                                padding: "16px",
                                border: "none",
                                backgroundColor: "#f7f7f7",
                                cursor: "pointer",
                            }}
                            onChange={(e) => setProficiency(e.target.value)}
                        >
                            <option defaultValue value={""}>
                                Open this select menu
                            </option>
                            {renderProficiencyOptions}
                        </select>
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
                                    setIsAddLanguage(false);
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
                                    if (language && isValue) {
                                        setValue([
                                            ...isValue,
                                            {
                                                language,
                                                proficiency,
                                            },
                                        ]);
                                    } else if (language && !isValue) {
                                        setValue([
                                            {
                                                language,
                                                proficiency,
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
                            Add a language
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
                                onClick={() => setIsAddLanguage(true)}
                            >
                                Add a language
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
                        {renderLanguages}
                        {renderLanguages?.length >= 2 && (
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

export default Languages;
