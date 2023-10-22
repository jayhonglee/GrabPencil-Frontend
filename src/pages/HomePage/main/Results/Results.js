import SliderItem from "./SliderItem/SliderItem";
import MainItem from "./MainItem/MainItem";
import Pagination from "./Pagination/Pagination";
import { format } from "timeago.js";

function Results({ tutorProfilesArray }) {
    const sliderItemsRender = tutorProfilesArray.map((tutorProfile) => {
        if (!tutorProfile) return null;

        const currentEducation = tutorProfile.education.find(
            (education) => education.currentlyAttending === true
        );
        const firstName = tutorProfile.firstName;
        const lastName = tutorProfile.lastName;
        const school = currentEducation.school;
        const timeElapsed = format(tutorProfile.createdAt);
        const aboutMe = tutorProfile.aboutMe;
        const major = currentEducation.major;
        const gpa = currentEducation.gpa;
        const subjects = tutorProfile.subjects
            .map((subject) => subject.subject)
            .join(", ");
        const lessonMethod = tutorProfile.lessonMethod;
        const lessonLocation = tutorProfile.lessonLocation;
        const languages = tutorProfile.languages
            .map((language) => language.language)
            .join(", ");
        const sex = tutorProfile.sex;
        const hourlyRate = tutorProfile.hourlyRate;

        const sliderItemData = {
            firstName, //required
            lastName, //required
            school, //required
            timeElapsed, // required
            aboutMe, //required
            major, //required
            gpa,
            subjects, //required
            lessonMethod, //required
            lessonLocation,
            languages, //required
            sex, //required
            hourlyRate, //required
            portrait: "path/to/portrait.jpg", // Replace with the actual image path
        };

        return <SliderItem data={sliderItemData} />;
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="p-0 col-5" style={{ background: "" }}>
                    {sliderItemsRender.length === 0 ? (
                        <p className="mt-3">No tutor profiles found</p>
                    ) : (
                        sliderItemsRender
                    )}
                    <Pagination />
                </div>
                <div className="col-7" style={{ background: "" }}>
                    <MainItem />
                </div>
            </div>
        </div>
    );
}

export default Results;
