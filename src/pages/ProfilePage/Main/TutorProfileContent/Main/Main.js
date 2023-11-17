import Info from "./Info/Info";

function Main({ currentProfile }) {
    const wrapperStyle = {
        width: "840px",
        margin: "0 24px",
    };

    console.log(currentProfile);

    return (
        <div style={wrapperStyle} className="d-flex flex-column">
            <Info
                label={"Subjects"}
                content={currentProfile?.subjects?.map((sub) => sub.subject)}
            />
            <Info label={"Headline"} content={currentProfile?.headline} />
            <Info
                label={"Lesson method"}
                content={currentProfile?.lessonMethod}
            />
            <Info
                label={"Lesson location"}
                content={currentProfile?.lessonLocation}
            />
            <span className="d-flex">
                <div style={{ width: "49%", marginRight: "2%" }}>
                    <Info
                        label={"First name"}
                        content={currentProfile?.firstName}
                    />
                </div>
                <div style={{ width: "49%" }}>
                    <Info
                        label={"Last name"}
                        content={currentProfile?.lastName}
                    />
                </div>
            </span>
            <Info label={"Gender"} content={currentProfile?.gender} />
            <Info
                label={"Education"}
                content={currentProfile?.education?.map((edu) => edu.school)}
            />
            <Info
                label={"Experience"}
                content={currentProfile?.experiences?.map(
                    (exp) => exp.companyName
                )}
            />
            <Info
                label={"Skills"}
                content={currentProfile?.skills?.map((s) => s.skill)}
            />
            <Info
                label={"Languages"}
                content={currentProfile?.languages?.map(
                    (lang) => lang.language
                )}
            />
            <Info label={"About me"} content={currentProfile?.aboutMe} />
            <Info
                label={"About lesson"}
                content={currentProfile?.aboutLesson}
            />
            <Info
                label={"Hourly rate"}
                content={
                    currentProfile?.hourlyRate &&
                    `$${currentProfile?.hourlyRate}`
                }
            />
        </div>
    );
}

export default Main;
