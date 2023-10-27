import SliderItem from "./SliderItem/SliderItem";
import MainItem from "./MainItem/MainItem";
import Pagination from "./Pagination/Pagination";
import { format } from "timeago.js";
import axios from "axios";
import { useEffect, useState } from "react";

function Results({ tutorProfilesArray, paginationObject }) {
    const [avatarURLs, setAvatarURLs] = useState({});

    useEffect(() => {
        const avatarObject = {};
        const fetchAvatar = async (tutorProfile) => {
            try {
                if (tutorProfile) {
                    const response = await axios.get(
                        `${process.env.REACT_APP_BASE_URL}/users/${tutorProfile.owner}/avatar`,
                        { responseType: "arraybuffer" }
                    );
                    const blob = new Blob([response.data], {
                        type: "image/png",
                    });
                    const imageUrl = URL.createObjectURL(blob);

                    avatarObject[tutorProfile.owner] = imageUrl;
                }
                setAvatarURLs(avatarObject);
                // console.log("set avatar urls!");
            } catch (error) {
                console.error("Error fetching user avatar:", error);
            }
        };

        tutorProfilesArray.forEach(fetchAvatar);
        // setAvatarURLs(avatarObject);
        // console.log(avatarObject);
        // console.log(avatarURLs);
    }, [tutorProfilesArray]);

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
        };

        return <SliderItem key={tutorProfile._id} data={sliderItemData} />;
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="p-0 col-5">
                    {sliderItemsRender.length === 0 ? (
                        <p className="mt-3">No tutor profiles found</p>
                    ) : (
                        sliderItemsRender
                    )}
                    <Pagination paginationObject={paginationObject} />
                </div>
                <div className="col-7">
                    <MainItem />
                </div>
            </div>
        </div>
    );
}

export default Results;
