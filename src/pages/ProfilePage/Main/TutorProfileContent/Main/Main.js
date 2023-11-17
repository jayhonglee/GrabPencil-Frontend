import { useState } from "react";
import Info from "./Info/Info";
import Subjects, { setIsVisibleSubjects } from "./Popups/Subjects";

function Main({ currentProfile }) {
    const [newSubjectsValue, setNewSubjectsValue] = useState();
    const [newHeadlineValue, setNewHeadlineValue] = useState();
    const [newLessonMethodValue, setNewLessonMethodValue] = useState();
    const [newLessonLocationValue, setNewLessonLocationValue] = useState();
    const [newEducationValue, setNewEducationValue] = useState();
    const [newExperienceValue, setNewExperienceValue] = useState();
    const [newSkillsValue, setNewSkillsValue] = useState();
    const [newLanguagesValue, setNewLanguagesValue] = useState();
    const [newAboutMeValue, setNewAboutMeValue] = useState();
    const [newAboutLessonValue, setNewAboutLessonValue] = useState();
    const [newHourlyRateValue, setNewHourlyRateValue] = useState();

    const wrapperStyle = {
        width: "840px",
        margin: "0 24px",
    };

    return (
        <div style={wrapperStyle} className="d-flex flex-column">
            <Info
                currentProfile={currentProfile}
                label={"Subjects"}
                content={currentProfile?.subjects?.map((sub) => sub.subject)}
                popup={<Subjects setValue={setNewSubjectsValue} />}
                setPopup={setIsVisibleSubjects}
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
