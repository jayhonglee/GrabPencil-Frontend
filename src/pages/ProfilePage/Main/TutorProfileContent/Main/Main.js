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
                currentProfile={currentProfile}
                label={"Subjects"}
                content={currentProfile?.subjects?.map((sub) => sub.subject)}
            />
            <Info
                currentProfile={currentProfile}
                label={"Headline"}
                content={currentProfile?.headline}
            />
            <Info
                currentProfile={currentProfile}
                label={"Lesson method"}
                content={currentProfile?.lessonMethod}
            />
            <Info
                currentProfile={currentProfile}
                label={"Lesson location"}
                content={currentProfile?.lessonLocation}
            />
            <span className="d-flex">
                <div style={{ width: "49%", marginRight: "2%" }}>
                    <Info
                        currentProfile={currentProfile}
                        label={"First name"}
                        content={currentProfile?.firstName}
                    />
                </div>
                <div style={{ width: "49%" }}>
                    <Info
                        currentProfile={currentProfile}
                        label={"Last name"}
                        content={currentProfile?.lastName}
                    />
                </div>
            </span>
            <Info
                currentProfile={currentProfile}
                label={"Gender"}
                content={currentProfile?.gender}
            />
            <Info
                currentProfile={currentProfile}
                label={"Education"}
                content={currentProfile?.education?.map((edu) => edu.school)}
            />
            <Info
                currentProfile={currentProfile}
                label={"Experience"}
                content={currentProfile?.experiences?.map(
                    (exp) => exp.companyName
                )}
            />
            <Info
                currentProfile={currentProfile}
                label={"Skills"}
                content={currentProfile?.skills?.map((s) => s.skill)}
            />
            <Info
                currentProfile={currentProfile}
                label={"Languages"}
                content={currentProfile?.languages?.map(
                    (lang) => lang.language
                )}
            />
            <Info
                currentProfile={currentProfile}
                label={"About me"}
                content={currentProfile?.aboutMe}
            />

            <Info
                currentProfile={currentProfile}
                label={"About lesson"}
                content={currentProfile?.aboutLesson}
            />
            <Info
                currentProfile={currentProfile}
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
