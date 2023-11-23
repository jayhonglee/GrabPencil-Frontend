import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Education.css";

function Education({ isVisible, setIsVisible, isValue, setValue }) {
    const [isAddEducation, setIsAddEducation] = useState(false);
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [major, setMajor] = useState("");
    const [GPA, setGPA] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const [endYear, setEndYear] = useState("");
    const [currentlyAttending, setCurrentlyAttending] = useState("");
    const shadeRef = useRef(null);

    useEffect(() => {
        setIsAddEducation(false);
    }, [isValue]);

    useEffect(() => {
        setSchool("");
        setDegree("");
        setMajor("");
        setGPA("");
        setStartMonth("");
        setStartYear("");
        setEndMonth("");
        setEndYear("");
        setCurrentlyAttending("");
    }, [isAddEducation]);

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
                    margin: "16px 0",
                    maxHeight: "60vh",
                }}
            >
                {edu.school}{" "}
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                    <i>{edu.currentlyAttending && "(Attending)"}</i>
                </span>
                <br />
                <div style={{ fontSize: "14px", fontWeight: "400" }}>
                    {edu.degree ? `${edu.degree} - ` : ""}
                    {edu.major} {edu.gpa && `(${edu.gpa})`}
                    <br />
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

    const renderEducationInfo = [
        {
            label: "School",
            placeholder: "ex) Simon Fraser University",
            set: setSchool,
        },
        {
            label: "Degree (optional)",
            placeholder: "ex) Bachelor of Science - BSc",
            set: setDegree,
        },
        { label: "Major", placeholder: "ex) Biology", set: setMajor },
        {
            label: "GPA (optional)",
            placeholder: "ex) 4.0/4.33 | A- average",
            set: setGPA,
        },
    ].map((info) => {
        return (
            <>
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
            </>
        );
    });

    const renderEducationDuration = [
        {
            labelOne: "Start month",
            placeholderOne: "ex) September",
            setOne: setStartMonth,
            labelTwo: "Start year",
            placeholderTwo: "ex) 2019",
            setTwo: setStartYear,
        },
        {
            labelOne: "End month (or expected)",
            placeholderOne: "ex) December",
            setOne: setEndMonth,
            labelTwo: "End year (or expected)",
            placeholderTwo: "ex) 2023",
            setTwo: setEndYear,
        },
    ].map((info) => {
        return (
            <div className="d-flex justify-content-between align-items-center">
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
                    setIsAddEducation(false);
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
                    Education
                    {isAddEducation && (
                        <span
                            style={{
                                position: "absolute",
                                left: "0",
                                height: "100%",
                                cursor: "pointer",
                            }}
                            onClick={() => setIsAddEducation(false)}
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
                    {!isAddEducation ? (
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
                                Add an education
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
                                        setIsAddEducation(true);
                                    }}
                                >
                                    Add an education
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
                            {renderEducation}
                        </>
                    ) : (
                        <>
                            {renderEducationInfo}
                            {renderEducationDuration}
                            <div
                                className="text-start"
                                style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    marginTop: "18px",
                                }}
                            >
                                Currently attending
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
                                    setCurrentlyAttending(value);
                                }}
                            />
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
                                            setIsAddEducation(false);
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
                                                school &&
                                                major &&
                                                startMonth &&
                                                !isNaN(startYear) &&
                                                endMonth &&
                                                !isNaN(endYear) &&
                                                currentlyAttending &&
                                                (currentlyAttending === "yes" ||
                                                    currentlyAttending === "no")
                                            ) {
                                                setValue([
                                                    ...isValue,
                                                    {
                                                        school,
                                                        degree,
                                                        major,
                                                        startDateMonth:
                                                            startMonth,
                                                        startDateYear:
                                                            startYear,
                                                        endDateMonth: endMonth,
                                                        endDateYear: endYear,
                                                        gpa: GPA,
                                                        currentlyAttending,
                                                    },
                                                ]);
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

export default Education;
