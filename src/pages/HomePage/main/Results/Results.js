import SliderItem from "./SliderItem/SliderItem";
import MainItem from "./MainItem/MainItem";
import Pagination from "./Pagination/Pagination";

function Results({ tutorProfilesArray }) {
    const sliderItemsRender = tutorProfilesArray.map((tutorProfile) => {
        if (!tutorProfile) return null;

        const sliderItemData = {
            firstName: tutorProfile.firstName, //required
            lastName: tutorProfile.lastName, //required
            school: "SFU", //at least one education entry is required
            timeElapsed: "sampleTime",
            aboutMe: tutorProfile.aboutMe, //required
            major: "sampleMajor",
            gpa: "sampleGPA",
            subjects: "sampleSubjects", //at least one subject entry is required
            lessonMethod: tutorProfile.lessonMethod, //required
            lessonLocation: tutorProfile.lessonLocation,
            languages: "sampleLanguages", //at least one language entry is required
            sex: tutorProfile.sex, //required
            hourlyRate: tutorProfile.hourlyRate, //required
            portrait: "path/to/portrait.jpg", // Replace with the actual image path
        };

        return <SliderItem data={sliderItemData} />;
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="p-0 col-5" style={{ background: "" }}>
                    {sliderItemsRender}
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
