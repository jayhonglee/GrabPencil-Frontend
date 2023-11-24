import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Experience.css";

function Experience({ isVisible, setIsVisible, isValue, setValue }) {
    const [isAddExperience, setIsAddExperience] = useState(false);
    const [title, setTitle] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [locationType, setLocationType] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [endYear, setEndYear] = useState("");
    const [currentlyWorking, setCurrentlyWorking] = useState("");
    const shadeRef = useRef(null);

    useEffect(() => {
        setIsAddExperience(false);
    }, [isValue]);

    useEffect(() => {
        setTitle("");
        setEmploymentType("");
        setCompanyName("");
        setLocation("");
        setLocationType("");
        setStartMonth("");
        setStartYear("");
        setEndMonth("");
        setEndYear("");
        setCurrentlyWorking("");
    }, [isAddExperience]);

    if (!Array.isArray(isValue)) {
        isValue = [];
    }

    const sortedExperience = isValue?.slice().sort((a, b) => {
        return b.startDateYear - a.startDateYear;
    });

    const renderExperience = sortedExperience?.map((exp, n) => {
        return (
            <div
                key={n}
                className="text-start educationList"
                style={{
                    padding: "16px 24px",
                    border: "1px solid rgb(217, 217, 217)",
                    fontSize: "16px",
                    borderRadius: "32px",
                    margin: "16px 0",
                    maxHeight: "60vh",
                }}
                onClick={() => {
                    const updatedValue = sortedExperience.filter(
                        (_, index) => index !== n
                    );
                    if (updatedValue.length === 0) return setValue([]);
                    setValue(updatedValue);
                }}
            >
                {exp.companyName}{" "}
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                    <i>{exp.currentlyWorking === "yes" && "(Working)"}</i>
                </span>
                <br />
                <div style={{ fontSize: "14px", fontWeight: "400" }}>
                    {exp.employmentType ? `${exp.employmentType} - ` : ""}
                    {exp.title} {exp.location && `(${exp.location})`}
                    <br />
                </div>
                <div
                    style={{
                        fontSize: "14px",
                        fontWeight: "400",
                    }}
                >
                    {exp.startDateMonth} {exp.startDateYear}{" "}
                    {exp.endDateMonth || exp.endDateYear
                        ? ` - ${exp.endDateMonth} ${exp.endDateYear}`
                        : ""}
                </div>
            </div>
        );
    });

    const renderExperienceInfo = [
        {
            label: "Title",
            placeholder: "ex) Teaching Assistant",
            set: setTitle,
        },
        {
            label: "Employment type (optional)",
            placeholder: "ex) Full-Time | Part-Time | Co-op",
            set: setEmploymentType,
        },
        {
            label: "Company name",
            placeholder: "ex) University of British Columbia | Microsoft",
            set: setCompanyName,
        },
        {
            label: "Location (optional)",
            placeholder: "ex) Vancouver, BC V6T 1Z4",
            set: setLocation,
        },
        {
            label: "Location type (optional)",
            placeholder: "ex) On-Site | Remote | Hybrid",
            set: setLocationType,
        },
    ].map((info, n) => {
        return (
            <div key={n}>
                <div
                    className="text-start"
                    style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginTop: "18px",
                    }}
                >
                    {info.label}
                </div>
                <textarea
                    placeholder={info.placeholder}
                    className="txtarea"
                    style={{
                        width: "100%",
                        height: "53px",
                        marginTop: "5px",
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
                        info.set(value);
                    }}
                />
            </div>
        );
    });

    const renderExperienceDuration = [
        {
            labelOne: "Start month",
            placeholderOne: "ex) September",
            setOne: setStartMonth,
            labelTwo: "Start year",
            placeholderTwo: "ex) 2019",
            setTwo: setStartYear,
        },
        {
            labelOne: "End month (optional)",
            placeholderOne: "ex) December",
            setOne: setEndMonth,
            labelTwo: "End year (optional)",
            placeholderTwo: "ex) 2023",
            setTwo: setEndYear,
        },
    ].map((info, n) => {
        return (
            <div
                className="d-flex justify-content-between align-items-center"
                key={n}
            >
                <div style={{ width: "47.5%" }}>
                    <div
                        className="text-start"
                        style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            marginTop: "18px",
                        }}
                    >
                        {info.labelOne}
                    </div>
                    <textarea
                        placeholder={info.placeholderOne}
                        className="txtarea"
                        style={{
                            width: "100%",
                            height: "53px",
                            marginTop: "5px",
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
                            info.setOne(value);
                        }}
                    />
                </div>
                <div style={{ width: "47.5%" }}>
                    <div
                        className="text-start"
                        style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            marginTop: "18px",
                        }}
                    >
                        {info.labelTwo}
                    </div>
                    <textarea
                        placeholder={info.placeholderTwo}
                        className="txtarea"
                        style={{
                            width: "100%",
                            height: "53px",
                            marginTop: "5px",
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
                            info.setTwo(parseInt(value));
                        }}
                    />
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
                    setIsAddExperience(false);
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
                    style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        lineHeight: "32px",
                        marginBottom: "14px",
                        position: "relative",
                    }}
                >
                    Experience
                    {isAddExperience && (
                        <span
                            style={{
                                position: "absolute",
                                left: "0",
                                height: "100%",
                                cursor: "pointer",
                            }}
                            onClick={() => setIsAddExperience(false)}
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
                <div
                    className="scroll-content"
                    style={{
                        maxHeight: "60vh",
                        overflow: "auto",
                        padding: "0 16px",
                    }}
                >
                    {!isAddExperience ? (
                        <>
                            <div
                                className="text-start"
                                style={{
                                    padding: "16px",
                                    marginBottom: "14px",
                                    width: "100%",
                                    height: "56px",
                                    borderRadius: "24px",
                                    background: "#E8F2FF",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    color: "#157dfe",
                                }}
                            >
                                Add an experience
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
                                    onClick={() => {
                                        setIsAddExperience(true);
                                    }}
                                >
                                    Add an experience
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
                            {renderExperience}
                            {renderExperience?.length >= 1 && (
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
                        </>
                    ) : (
                        <>
                            {renderExperienceInfo}
                            {renderExperienceDuration}
                            <div
                                className="text-start"
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    marginTop: "18px",
                                }}
                            >
                                Currently working
                            </div>
                            <textarea
                                placeholder="ex) yes | no"
                                className="txtarea"
                                style={{
                                    width: "100%",
                                    height: "53px",
                                    marginTop: "5px",
                                    overflow: "hidden",
                                    borderRadius: "20px",
                                    padding: "16px",
                                    resize: "none",
                                    border: "none",
                                    background: "#f7f7f7",
                                    whiteSpace: "nowrap",
                                }}
                                onChange={(e) => {
                                    const value = e.target.value
                                        .trim()
                                        .toLowerCase();
                                    setCurrentlyWorking(value);
                                }}
                            />
                            <div
                                className="text-start"
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    marginTop: "18px",
                                }}
                            >
                                <b>Quick Tip: </b>If you're presently employed,
                                there's no need to fill in the end month and
                                year.
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
                                            setIsAddExperience(false);
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
                                            if (
                                                title &&
                                                companyName &&
                                                startMonth &&
                                                !isNaN(startYear) &&
                                                currentlyWorking &&
                                                (currentlyWorking === "yes" ||
                                                    currentlyWorking === "no")
                                            ) {
                                                if (isValue) {
                                                    setValue([
                                                        ...isValue,
                                                        {
                                                            title,
                                                            employmentType,
                                                            companyName,
                                                            location,
                                                            locationType,
                                                            startDateMonth:
                                                                startMonth,
                                                            startDateYear:
                                                                startYear,
                                                            endDateMonth:
                                                                endMonth,
                                                            endDateYear:
                                                                endYear,
                                                            currentlyWorking,
                                                        },
                                                    ]);
                                                } else {
                                                    setValue([
                                                        {
                                                            title,
                                                            employmentType,
                                                            companyName,
                                                            location,
                                                            locationType,
                                                            startDateMonth:
                                                                startMonth,
                                                            startDateYear:
                                                                startYear,
                                                            endDateMonth:
                                                                endMonth,
                                                            endDateYear:
                                                                endYear,
                                                            currentlyWorking,
                                                        },
                                                    ]);
                                                }
                                            }
                                        }}
                                    >
                                        Add
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
