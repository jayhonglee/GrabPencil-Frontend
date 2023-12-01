import TutorSearch from "./TutorSearch/TutorSearch";
import Results from "./Results/Results";
import { useState, useEffect } from "react";
import axios from "axios";
import ResultsLoading from "./ResultsLoading/ResultsLoading";

function Main() {
    const [tutorProfilesIsLoading, setTutorProfilesIsLoading] = useState(true);
    const [tutorProfilesArray, setTutorProfilesArray] = useState([]);
    const [paginationObject, setPaginationObject] = useState({});
    const [currentTutorProfile, setCurrentTutorProfile] = useState({});
    const [avatarURLs, setAvatarURLs] = useState({});

    const avatarObject = {};

    const getTutorProfiles = async (pageNumber) => {
        try {
            // Get tutor profiles
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/tutorProfiles?sortBy=createdAt:Newest&pageSize=${process.env.REACT_APP_PAGE_SIZE}&pageNumber=${pageNumber}&maxPageIndex=${process.env.REACT_APP_MAX_PAGE_INDEX}`
            );
            // Get avatars and save to avatarObject
            for (const tutorProfile of response.data.tutorProfiles) {
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
            setTutorProfilesArray(response.data.tutorProfiles);
            setCurrentTutorProfile(response.data.tutorProfiles?.[0]);
            setAvatarURLs(avatarObject);
            setPaginationObject({
                totalPages: response.data.totalPages,
                currentPage: response.data.currentPage,
                pageIndexes: response.data.pageIndexes,
                onPageChange,
            });
            setTutorProfilesIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const onPageChange = (newPage) => {
        setTutorProfilesIsLoading(true);
        getTutorProfiles(newPage);
    };

    useEffect(() => {
        getTutorProfiles(process.env.REACT_APP_PAGE_NUMBER);
    }, []);

    const divStyle = {
        width: "70%",
        margin: "0 auto",
    };

    return (
        <div className="text-center container-fluid p-3 ps-0 pe-0">
            <div className="mb-3" style={divStyle}>
                <TutorSearch
                    setTutorProfilesArray={setTutorProfilesArray}
                    setPaginationObject={setPaginationObject}
                    setCurrentTutorProfile={setCurrentTutorProfile}
                    setAvatarURLs={setAvatarURLs}
                    setTutorProfilesIsLoading={setTutorProfilesIsLoading}
                />
            </div>
            <div>
                <hr className="m-0" />
            </div>
            <div className="" style={divStyle}>
                {!tutorProfilesIsLoading ? (
                    <ResultsLoading />
                ) : (
                    <Results
                        tutorProfilesArray={tutorProfilesArray}
                        paginationObject={paginationObject}
                        currentTutorProfile={currentTutorProfile}
                        setCurrentTutorProfile={setCurrentTutorProfile}
                        avatarURLs={avatarURLs}
                        setTutorProfilesIsLoading={setTutorProfilesIsLoading}
                        tutorProfilesIsLoading={tutorProfilesIsLoading}
                    />
                )}
            </div>
        </div>
    );
}

export default Main;
