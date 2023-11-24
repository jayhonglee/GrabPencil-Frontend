import { useState, useEffect } from "react";
import Info from "./Info/Info";
import Subjects from "./Popups/Subjects/Subjects";
import Headline from "./Popups/Headline/Headline";
import LessonMethod from "./Popups/LessonMethod/LessonMethod";
import LessonLocation from "./Popups/LessonLocation/LessonLocation";
import Education from "./Popups/Education/Education";
import Experience from "./Popups/Experience/Experience";
import Skills from "./Popups/Skills/Skills";
import Languages from "./Popups/Languages/Languages";

function Main({ currentProfile }) {
    const [newSubjectsValue, setNewSubjectsValue] = useState();
    const [isSubjectsVisible, setIsSubjectsVisible] = useState(false);
    const [newHeadlineValue, setNewHeadlineValue] = useState();
    const [isHeadlineVisible, setIsHeadlineVisible] = useState(false);
    const [newLessonMethodValue, setNewLessonMethodValue] = useState();
    const [isLessonMethodVisible, setIsLessonMethodVisible] = useState(false);
    const [newLessonLocationValue, setNewLessonLocationValue] = useState();
    const [isLessonLocationVisible, setIsLessonLocationVisible] =
        useState(false);
    const [newEducationValue, setNewEducationValue] = useState();
    const [isEducationVisible, setIsEducationVisible] = useState(false);
    const [newExperienceValue, setNewExperienceValue] = useState();
    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const [newSkillsValue, setNewSkillsValue] = useState();
    const [isSkillsVisible, setIsSkillsVisible] = useState(false);
    const [newLanguagesValue, setNewLanguagesValue] = useState();
    const [isLanguagesVisible, setIsLanguagesVisible] = useState(false);
    const [newAboutMeValue, setNewAboutMeValue] = useState();
    const [newAboutLessonValue, setNewAboutLessonValue] = useState();
    const [newHourlyRateValue, setNewHourlyRateValue] = useState();

    const wrapperStyle = {
        width: "840px",
        margin: "0 24px",
    };

    useEffect(() => {
        setNewSubjectsValue(currentProfile?.subjects);
        setNewHeadlineValue(currentProfile?.headline);
        setNewLessonMethodValue(currentProfile?.lessonMethod);
        setNewLessonLocationValue(currentProfile?.lessonLocation);
        setNewEducationValue(currentProfile?.education);
        setNewExperienceValue(currentProfile?.experiences);
        setNewSkillsValue(currentProfile?.skills);
        setNewLanguagesValue(currentProfile?.languages);
    }, [currentProfile]);

    return (
        <div style={wrapperStyle} className="d-flex flex-column">
            <Info
                currentProfile={currentProfile}
                label={"Subjects"}
                content={newSubjectsValue?.map((sub) => sub.subject)}
                popup={
                    <Subjects
                        isVisible={isSubjectsVisible}
                        setIsVisible={setIsSubjectsVisible}
                        isValue={newSubjectsValue}
                        setValue={setNewSubjectsValue}
                    />
                }
                setPopup={setIsSubjectsVisible}
            />
            <Info
                currentProfile={currentProfile}
                label={"Headline (optional)"}
                content={newHeadlineValue}
                popup={
                    <Headline
                        isVisible={isHeadlineVisible}
                        setIsVisible={setIsHeadlineVisible}
                        isValue={newHeadlineValue}
                        setValue={setNewHeadlineValue}
                    />
                }
                setPopup={setIsHeadlineVisible}
            />
            <Info
                currentProfile={currentProfile}
                label={"Lesson method"}
                content={newLessonMethodValue}
                popup={
                    <LessonMethod
                        isVisible={isLessonMethodVisible}
                        setIsVisible={setIsLessonMethodVisible}
                        isValue={newLessonMethodValue}
                        setValue={setNewLessonMethodValue}
                    />
                }
                setPopup={setIsLessonMethodVisible}
            />
            <Info
                currentProfile={currentProfile}
                label={
                    newLessonMethodValue === "Remote"
                        ? "Lesson location (Not applicable for Remote)"
                        : "Lesson location"
                }
                content={newLessonLocationValue}
                popup={
                    <LessonLocation
                        isVisible={isLessonLocationVisible}
                        setIsVisible={setIsLessonLocationVisible}
                        isValue={newLessonLocationValue}
                        setValue={setNewLessonLocationValue}
                    />
                }
                setPopup={setIsLessonLocationVisible}
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
                content={newEducationValue?.map((edu) => edu.school)}
                popup={
                    <Education
                        isVisible={isEducationVisible}
                        setIsVisible={setIsEducationVisible}
                        isValue={newEducationValue}
                        setValue={setNewEducationValue}
                    />
                }
                setPopup={setIsEducationVisible}
            />
            <Info
                currentProfile={currentProfile}
                label={"Experience (optional)"}
                content={
                    Array.isArray(newExperienceValue)
                        ? newExperienceValue?.map((exp) => exp.companyName)
                        : newExperienceValue
                }
                popup={
                    <Experience
                        isVisible={isExperienceVisible}
                        setIsVisible={setIsExperienceVisible}
                        isValue={newExperienceValue}
                        setValue={setNewExperienceValue}
                    />
                }
                setPopup={setIsExperienceVisible}
            />
            <Info
                currentProfile={currentProfile}
                label={"Skills (optional)"}
                content={
                    Array.isArray(newSkillsValue)
                        ? newSkillsValue?.map((s) => s.skill)
                        : newSkillsValue
                }
                popup={
                    <Skills
                        isVisible={isSkillsVisible}
                        setIsVisible={setIsSkillsVisible}
                        isValue={newSkillsValue}
                        setValue={setNewSkillsValue}
                    />
                }
                setPopup={setIsSkillsVisible}
            />
            <Info
                currentProfile={currentProfile}
                label={"Languages"}
                content={newLanguagesValue?.map((lang) => lang.language)}
                popup={
                    <Languages
                        isVisible={isLanguagesVisible}
                        setIsVisible={setIsLanguagesVisible}
                        isValue={newLanguagesValue}
                        setValue={setNewLanguagesValue}
                    />
                }
                setPopup={setIsLanguagesVisible}
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
