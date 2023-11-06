import TutorSearch from "./TutorSearch/TutorSearch";
import Results from "./Results/Results";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ResultsLoading from "./ResultsLoading/ResultsLoading";

function Main() {
    const [tutorProfilesIsLoading, setTutorProfilesIsLoading] = useState(true);
    const [tutorProfilesArray, setTutorProfilesArray] = useState([]);
    const [paginationObject, setPaginationObject] = useState({});
    const [currentTutorProfile, setCurrentTutorProfile] = useState({});

    const isInitialRender = useRef(true);

    const getTutorProfiles = async (pageNumber) => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/tutorProfiles?sortBy=createdAt:desc&pageSize=${process.env.REACT_APP_PAGE_SIZE}&pageNumber=${pageNumber}&maxPageIndex=${process.env.REACT_APP_MAX_PAGE_INDEX}`
            );
            setTutorProfilesArray(response.data.tutorProfiles);
            setPaginationObject({
                totalPages: response.data.totalPages,
                currentPage: response.data.currentPage,
                pageIndexes: response.data.pageIndexes,
                onPageChange,
            });
            setCurrentTutorProfile(response.data.tutorProfiles?.[0]);
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
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return; // Skip the initial render
        }

        getTutorProfiles(process.env.REACT_APP_PAGE_NUMBER);
    }, []);

    const divStyle = {
        width: "70%",
        margin: "0 auto",
    };

    return (
        <div className="text-center container-fluid p-3 ps-0 pe-0">
            <div className="mb-3" style={divStyle}>
                <TutorSearch />
            </div>
            <div>
                <hr className="m-0" />
            </div>
            <div className="" style={divStyle}>
                {tutorProfilesIsLoading ? (
                    <ResultsLoading />
                ) : (
                    <Results
                        tutorProfilesArray={tutorProfilesArray}
                        paginationObject={paginationObject}
                        currentTutorProfile={currentTutorProfile}
                        setCurrentTutorProfile={setCurrentTutorProfile}
                    />
                )}
            </div>
        </div>
    );
}

export default Main;
