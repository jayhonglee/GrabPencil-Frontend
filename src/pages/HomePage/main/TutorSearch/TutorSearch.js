import SearchbarsRender from "./SearchbarsRender/SearchbarsRender";
import FiltersRender from "./FiltersRender/FiltersRender";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

function TutorSearch({
    setTutorProfilesArray,
    setPaginationObject,
    setCurrentTutorProfile,
    setAvatarURLs,
    setTutorProfilesIsLoading,
}) {
    const mountRefOne = useRef(false);
    const mountRefTwo = useRef(false);
    const [currentParamString, setCurrentParamString] = useState(
        "sortBy=createdAt:Newest"
    );
    const [currentWhatParam, setCurrentWhatParam] = useState("");
    const [currentWhereParam, setCurrentWhereParam] = useState("");
    const [currentSortByParam, setCurrentSortByParam] = useState("Newest");
    const [currentSchoolParam, setCurrentSchoolParam] = useState("");
    const [currentLanguageParam, setCurrentLanguageParam] = useState("");
    const [currentHourlyRateParam, setCurrentHourlyRateParam] = useState("");
    const [currentGenderParam, setCurrentGenderParam] = useState("");
    const [currentLessonMethodParam, setCurrentLessonMethodParam] =
        useState("");
    const [forceUpdate, setForceUpdate] = useState(0);

    const avatarObject = {};
    const filterParams = {
        currentSortByParam,
        currentSchoolParam,
        currentLanguageParam,
        currentGenderParam,
        currentLessonMethodParam,
        currentHourlyRateParam,
    };
    const setFunctions = {
        setCurrentSortByParam,
        setCurrentSchoolParam,
        setCurrentLanguageParam,
        setCurrentGenderParam,
        setCurrentLessonMethodParam,
        setCurrentHourlyRateParam,
    };

    const colorTheme = useFetchColorTheme();
    const fetchButtonText = useFetch("searchbar")[2].buttons[0].text;

    const getTutorProfiles = async (pageNumber) => {
        if (!mountRefOne.current) {
            mountRefOne.current = true;
            return;
        }
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/tutorProfiles?${currentParamString}&pageSize=${process.env.REACT_APP_PAGE_SIZE}&pageNumber=${pageNumber}&maxPageIndex=${process.env.REACT_APP_MAX_PAGE_INDEX}`
            );
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

    useEffect(() => {
        setTutorProfilesIsLoading(true);
        getTutorProfiles(1);
    }, [currentParamString, forceUpdate]);

    const onPageChange = (newPage) => {
        setTutorProfilesIsLoading(true);
        getTutorProfiles(newPage);
    };

    const onButtonClick = (event) => {
        event.preventDefault();
        setCurrentSortByParam("Newest");
        setCurrentSchoolParam("");
        setCurrentLanguageParam("");
        setCurrentGenderParam("");
        setCurrentLessonMethodParam("");
        setCurrentHourlyRateParam("");
        const encodedWhat = encodeParam(currentWhatParam);
        const encodedWhere = encodeParam(currentWhereParam);

        setCurrentParamString(
            `sortBy=createdAt:Newest&what=${encodedWhat}&where=${encodedWhere}`
        );
        setForceUpdate((prev) => prev + 1);
    };

    useEffect(() => {
        if (!mountRefTwo.current) {
            mountRefTwo.current = true;
            return;
        }

        const encodedWhat = encodeParam(currentWhatParam);
        const encodedWhere = encodeParam(currentWhereParam);
        const encodedSortBy = encodeParam(currentSortByParam);
        const encodedSchool = encodeParam(currentSchoolParam);
        const encodedLanguage = encodeParam(currentLanguageParam);
        const encodedHourlyRate = encodeParam(currentHourlyRateParam);
        const encodedGender = encodeParam(currentGenderParam);
        const encodedLessonMethod = encodeParam(currentLessonMethodParam);

        setCurrentParamString(
            `sortBy=createdAt:${encodedSortBy}&school=${encodedSchool}&language=${encodedLanguage}&hourlyRate=${encodedHourlyRate}&gender=${encodedGender}&lessonMethod=${encodedLessonMethod}&what=${encodedWhat}&where=${encodedWhere}`
        );
    }, [
        currentSortByParam,
        currentSchoolParam,
        currentLanguageParam,
        currentHourlyRateParam,
        currentGenderParam,
        currentLessonMethodParam,
    ]);

    const encodeParam = (param) => {
        if (typeof param !== "string")
            console.error("encodeParam requires param to be a string type.");
        return encodeURI(param);
    };

    const form = {
        height: "44px",
    };

    const button = {
        background: colorTheme.point,
        textAlign: "center",
        border: "none",
        fontWeight: "600",
    };

    return (
        <div className="text-center container-fluid p-0">
            <form
                className="col d-flex justify-content-between mb-4"
                style={form}
                onSubmit={onButtonClick}
            >
                <SearchbarsRender
                    onChange={{ setCurrentWhatParam, setCurrentWhereParam }}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={button}
                >
                    {fetchButtonText}
                </button>
            </form>
            <div className="col">
                <FiltersRender
                    setFunctions={setFunctions}
                    filterParams={filterParams}
                />
            </div>
        </div>
    );
}

export default TutorSearch;
