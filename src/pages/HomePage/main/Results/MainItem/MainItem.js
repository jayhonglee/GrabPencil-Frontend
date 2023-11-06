import SFULogo from "../SliderItem/sampleData/SFULogo.png";

function MainItem({ currentTutorProfile }) {
    // // Use a useEffect to watch for changes in avatarURLsLoaded
    // useEffect(() => {
    //     setAvatarURLsLoadedState(avatarURLsLoaded);
    // }, [avatarURLsLoaded]);

    // // Create a function to update the component based on new prop values
    // const updateComponent = () => {
    //     console.log(currentTutorProfile?.avatarURL);
    //     // Update profile picture, or any other component updates
    //     const profileMain = document.getElementById("profileMain");
    //     if (profileMain) {
    //         profileMain.style.backgroundImage = currentTutorProfile?.avatarURL
    //             ? `url(${currentTutorProfile?.avatarURL})`
    //             : `url(/images/no_avatar.png)`;
    //     }
    // };

    // // Call the updateComponent function when avatarURLsLoadedState changes
    // useEffect(() => {
    //     if (avatarURLsLoadedState) {
    //         console.log("update");
    //         updateComponent();
    //     }
    // }, [avatarURLsLoadedState]);

    const sortArray = (array) => {
        const sortedArray = array?.sort((a, b) => {
            // Compare start date years in reverse order (latest first)
            if (a.startDateYear !== b.startDateYear) {
                return b.startDateYear - a.startDateYear;
            }

            // If the start date years are the same, compare start date months in reverse order (latest first)
            if (a.startDateMonth !== b.startDateMonth) {
                // Define a mapping of month names to their corresponding numerical values
                const monthOrder = {
                    January: 1,
                    February: 2,
                    March: 3,
                    April: 4,
                    May: 5,
                    June: 6,
                    July: 7,
                    August: 8,
                    September: 9,
                    October: 10,
                    November: 11,
                    December: 12,
                };

                return (
                    b.startDateYear - a.startDateYear ||
                    monthOrder[b.startDateMonth] - monthOrder[a.startDateMonth]
                );
            }

            // If both start date years and months are the same, the entries are considered equal
            return 0;
        });
        return sortedArray;
    };

    const sortedEducation = sortArray(currentTutorProfile?.education);
    const sortedExperiences = sortArray(currentTutorProfile?.experiences);

    const currentEducation = currentTutorProfile?.education?.find(
        (education) => education.currentlyAttending === true
    );

    const cardStyle = {
        width: "100%",
        height: "95vh",
        background: "#35b234",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: "1rem",
    };

    const headerStyle = {
        position: "relative",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        zIndex: "1",
    };

    const inHeaderOneStyle = {
        width: "100%",
        height: "6rem",
    };

    const inHeaderTwoStyle = {
        background: "#fff",
        width: "100%",
        textAlign: "left",
    };

    const inHeaderCircleStyle = {
        width: "7rem",
        height: "7rem",
        background: "#fff",
        borderRadius: "100%",
        position: "absolute",
        top: "6rem",
        left: "3%",
        transform: "translateY(-3.5rem)",
    };

    const bodyStyle = {
        overflowY: "scroll",
        background: "#FBFBFB",
    };

    return (
        <div
            id="profileCard"
            className="card border-0 mt-3 d-flex flex-column"
            style={cardStyle}
        >
            <div className="d-flex flex-column" style={headerStyle}>
                <div style={inHeaderOneStyle} />
                <div className="py-2 px-4" style={inHeaderTwoStyle}>
                    <div className="d-flex justify-content-end pb-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ background: "#35b234", border: "none" }}
                        >
                            Message
                        </button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div
                            style={{
                                lineHeight: "1.2",
                            }}
                        >
                            <span
                                style={{
                                    textAlign: "left",
                                    fontSize: "24px",
                                }}
                                className="m-0"
                            >
                                <b>
                                    {`${currentTutorProfile?.firstName} ${currentTutorProfile?.lastName} `}
                                </b>
                            </span>
                            <span
                                style={{ color: "grey" }}
                            >{`(${currentTutorProfile?.sex})`}</span>
                            <p className="m-0 pb-3">
                                {currentTutorProfile?.headline}
                            </p>
                        </div>
                        <p style={{ color: "grey" }}>
                            <img
                                className="me-2"
                                src={SFULogo} //needs to be updated
                                alt="profile"
                                width="48px"
                                height="auto"
                            />
                            {currentEducation?.school}
                        </p>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={inHeaderCircleStyle}
                >
                    <div
                        alt="profile"
                        id="profileMain"
                        style={{
                            width: "93%",
                            height: "93%",
                            backgroundImage: currentTutorProfile?.avatarURL
                                ? `url(${currentTutorProfile?.avatarURL})`
                                : `url(/images/no_avatar.png)`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "50%",
                        }}
                    />
                </div>
            </div>
            <div style={bodyStyle} className="flex-grow-1 px-4 py-3">
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-0">
                        <p className="m-0 text-start fs-5">
                            <b>Tutor Subjects</b>
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        {currentTutorProfile?.subjects?.map(
                            (subject, n, currentTutorProfile) => {
                                return (
                                    <div
                                        key={n}
                                        className={`py-2 ${
                                            n + 1 === currentTutorProfile.length
                                                ? ""
                                                : "border-bottom"
                                        }`}
                                    >
                                        <p className="text-start m-0">
                                            {subject?.subject}
                                        </p>
                                        <p
                                            className="text-start m-0"
                                            style={{
                                                color: "grey",
                                                lineHeight: "1",
                                            }}
                                        >
                                            {subject?.teachingLevels
                                                ? subject?.teachingLevels
                                                : ""}
                                        </p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <p className="m-0 text-start fs-5 d-flex justify-content-between">
                        <b>Lesson method</b>
                        <span>{currentTutorProfile?.lessonMethod}</span>
                    </p>
                </div>
                {currentTutorProfile?.lessonLocation ? (
                    <div
                        className="card mb-3 px-4 py-3"
                        style={{
                            border: "none",
                            background: "#fff",
                            boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                        }}
                    >
                        <p className="m-0 text-start fs-5 d-flex justify-content-between">
                            <b>Lesson location</b>
                            <span>{currentTutorProfile?.lessonLocation}</span>
                        </p>
                    </div>
                ) : (
                    ""
                )}
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-2">
                        <p className="m-0 text-start fs-5">
                            <b>About {currentTutorProfile?.firstName}</b>
                        </p>
                    </div>
                    <div>
                        <p className="text-start m-0">
                            {currentTutorProfile?.aboutMe}
                        </p>
                    </div>
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-2">
                        <p className="m-0 text-start fs-5">
                            <b>About the lesson</b>
                        </p>
                    </div>
                    <div>
                        <p className="text-start m-0">
                            {currentTutorProfile?.aboutLesson}
                        </p>
                    </div>
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div>
                        <p className="m-0 text-start fs-5">
                            <b>Education</b>
                        </p>
                    </div>
                    {sortedEducation?.map((education, n, eductaions) => {
                        return (
                            <div
                                className={`d-flex py-3 ${
                                    n + 1 === eductaions.length
                                        ? ""
                                        : "border-bottom"
                                }`}
                                key={n}
                            >
                                <div className="me-2">
                                    <img
                                        src={SFULogo} // needs to be updated
                                        alt="profile"
                                        width="48px"
                                        height="48px"
                                    />
                                </div>
                                <div className="d-flex flex-column">
                                    <div>
                                        <p
                                            className="m-0 text-start"
                                            style={{ fontWeight: "500" }}
                                        >
                                            {education?.school}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-start lh-sm">
                                            {education?.degree
                                                ? `${education?.degree}, `
                                                : ""}
                                            {education?.major}
                                        </p>
                                    </div>
                                    <div>
                                        <p
                                            className="m-0 text-start lh-sm"
                                            style={{
                                                color: "grey",
                                                fontSize: "14px",
                                            }}
                                        >
                                            {`${education?.startDateMonth} ${education?.startDateYear} - ${education?.endDateMonth} ${education?.endDateYear}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div>
                        <p className="m-0 text-start fs-5">
                            <b>Experience</b>
                        </p>
                    </div>
                    {sortedExperiences?.map((experience, n, experiences) => {
                        return (
                            <div
                                className={`d-flex py-3 ${
                                    n + 1 === experiences.length
                                        ? ""
                                        : "border-bottom"
                                }`}
                                key={n}
                            >
                                <div className="d-flex flex-column">
                                    <div>
                                        <p
                                            className="m-0 text-start"
                                            style={{ fontWeight: "500" }}
                                        >
                                            {experience?.title}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="m-0 text-start lh-sm">
                                            {experience?.employmentType
                                                ? `${experience?.companyName} · ${experience?.employmentType}`
                                                : experience?.companyName}
                                        </p>
                                    </div>
                                    <div>
                                        <p
                                            className="m-0 text-start lh-sm"
                                            style={{
                                                color: "grey",
                                                fontSize: "14px",
                                            }}
                                        >
                                            {experience?.currentlyWorking
                                                ? `${experience?.startDateMonth} ${experience?.startDateYear} - Present`
                                                : `${experience?.startDateMonth} ${experience?.startDateYear} - ${experience?.endDateMonth} ${experience?.endDateYear}`}
                                        </p>
                                        <p
                                            className="m-0 text-start lh-sm"
                                            style={{
                                                color: "grey",
                                                fontSize: "14px",
                                            }}
                                        >
                                            {(experience?.location &&
                                                `${experience?.location}, `) ||
                                                ""}
                                            {experience?.locationType || ""}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-0">
                        <p className="m-0 text-start fs-5">
                            <b>Languages</b>
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        {currentTutorProfile?.languages?.map(
                            (language, n, languages) => {
                                return (
                                    <div
                                        key={n}
                                        className={`py-2 ${
                                            n + 1 === languages.length
                                                ? ""
                                                : "border-bottom"
                                        }`}
                                    >
                                        <p className="text-start m-0">
                                            {language?.language}
                                        </p>
                                        <p
                                            className="text-start m-0"
                                            style={{
                                                color: "grey",
                                                lineHeight: "1",
                                            }}
                                        >
                                            {language?.proficiency || ""}
                                        </p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-2">
                        <p className="m-0 text-start fs-5">
                            <b>Skills</b>
                        </p>
                    </div>
                    <div>
                        <p className="text-start m-0">
                            {currentTutorProfile?.skills
                                ?.map((skill) => skill.skill)
                                ?.join(" · ")}
                        </p>
                    </div>
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <p className="m-0 text-start fs-5 d-flex justify-content-between">
                        <b>Hourly rate</b>
                        <span>${currentTutorProfile?.hourlyRate}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainItem;
