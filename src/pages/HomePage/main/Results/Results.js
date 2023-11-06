import SliderItem from "./SliderItem/SliderItem";
import MainItem from "./MainItem/MainItem";
import Pagination from "./Pagination/Pagination";
import { format } from "timeago.js";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Results({ tutorProfilesArray, paginationObject }) {
    const [avatarURLs, setAvatarURLs] = useState({});
    const [currentTutorProfile, setCurrentTutorProfile] = useState({});
    const [avatarURLsLoaded, setAvatarURLsLoaded] = useState(false); // New state

    const isInitialRender = useRef(true);

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return; // Skip the initial render
        }

        setCurrentTutorProfile(tutorProfilesArray?.[0]);
        const avatarObject = {};
        async function fetchAvatar() {
            if (tutorProfilesArray) {
                for (const tutorProfile of tutorProfilesArray) {
                    await axios
                        .get(
                            `${process.env.REACT_APP_BASE_URL}/users/${tutorProfile.owner}/avatar`,
                            { responseType: "arraybuffer" }
                        )
                        .then((response) => {
                            const blob = new Blob([response.data], {
                                type: "image/png",
                            });
                            const imageUrl = URL.createObjectURL(blob);
                            avatarObject[tutorProfile.owner] = imageUrl;
                        })
                        .catch((e) => {
                            console.log("Error: ", e);
                        });
                }
            }
        }

        fetchAvatar().then(() => {
            setAvatarURLs(avatarObject);
            setAvatarURLsLoaded(true); // Mark that avatarURLs are loaded
        });
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
            setCurrentTutorProfile({ ...tutorProfile, avatarURL });
        };

        return (
            <SliderItem
                key={tutorProfile._id}
                data={sliderItemData}
                onClick={onClick}
                currentTutorProfile={currentTutorProfile}
                avatarURLsLoaded={avatarURLsLoaded}
            />
        );
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
                    <MainItem currentTutorProfile={currentTutorProfile} />
                </div>
            </div>
        </div>
    );
}

export default Results;
