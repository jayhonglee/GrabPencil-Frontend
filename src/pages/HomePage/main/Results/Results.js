import SliderItem from "./SliderItem/SliderItem";
import MainItem from "./MainItem/MainItem";
import Pagination from "./Pagination/Pagination";
import { format } from "timeago.js";
import { useEffect, useState } from "react";

function Results({
    tutorProfilesArray,
    paginationObject,
    currentTutorProfile,
    setCurrentTutorProfile,
    avatarURLs,
}) {
    const [sliderItemsRender, setSliderItemsRender] = useState(null);

    useEffect(() => {
        const sliderItemsRender = tutorProfilesArray.map((tutorProfile) => {
            if (!tutorProfile) return null;

            const currentEducation = tutorProfile.education.find(
                (education) => education.currentlyAttending === true
            );

            const {
                firstName,
                lastName,
                aboutMe,
                subjects,
                lessonMethod,
                languages,
                sex,
                hourlyRate,
                _id,
            } = tutorProfile;

            const { school, major, gpa } = currentEducation;

            const timeElapsed = format(tutorProfile.createdAt);
            const avatarURL = avatarURLs[tutorProfile.owner];

            const sliderItemData = {
                firstName,
                lastName,
                school,
                timeElapsed,
                aboutMe,
                major,
                gpa,
                subjects: subjects.map((subject) => subject.subject).join(", "),
                lessonMethod,
                lessonLocation: tutorProfile.lessonLocation,
                languages: languages
                    .map((language) => language.language)
                    .join(", "),
                sex,
                hourlyRate,
                avatarURL,
                _id,
            };

            const onClick = () => {
                setCurrentTutorProfile(tutorProfile);
            };

            return (
                <SliderItem
                    key={tutorProfile._id}
                    data={sliderItemData}
                    onClick={onClick}
                    currentTutorProfile={currentTutorProfile}
                />
            );
        });
        setSliderItemsRender(sliderItemsRender);
    }, [tutorProfilesArray, currentTutorProfile, avatarURLs]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="p-0 col-5">
                    {sliderItemsRender?.length === 0 ? (
                        <>
                            <p className="mt-4" style={{ textAlign: "start" }}>
                                No tutor profiles found! 🤔 <br /> Don't worry,
                                we're on it. Let's keep searching! 🥰🔍
                            </p>
                            <p className="mb-1" style={{ textAlign: "start" }}>
                                <b>Search suggestions:</b>
                            </p>
                            <ul style={{ textAlign: "start" }}>
                                <li>Search more general keywords</li>
                                <li>Check your spelling</li>
                                <li>
                                    Replace abbreviations with the entire word
                                </li>
                                <li>
                                    Check your search has the correct spacing
                                </li>
                            </ul>
                        </>
                    ) : (
                        sliderItemsRender
                    )}
                    <Pagination paginationObject={paginationObject} />
                </div>
                <div className="col-7">
                    <MainItem
                        currentTutorProfile={currentTutorProfile}
                        avatarURLs={avatarURLs}
                    />
                </div>
            </div>
        </div>
    );
}

export default Results;
