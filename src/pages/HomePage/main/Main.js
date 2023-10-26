import TutorSearch from "./TutorSearch/TutorSearch";
import Results from "./Results/Results";
import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
    const divStyle = {
        width: "70%",
        margin: "0 auto",
    };

    const [tutorProfilesArray, setTutorProfilesArray] = useState([]);
    const [paginationObject, setPaginationObject] = useState({});

    useEffect(() => {
        async function getTutorProfiles() {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/tutorProfiles?sortBy=createdAt:desc&pageSize=${process.env.REACT_APP_PAGE_SIZE}&pageNumber=${process.env.REACT_APP_PAGE_NUMBER}&maxPageIndex=${process.env.REACT_APP_MAX_PAGE_INDEX}`
                );
                setTutorProfilesArray(response.data.tutorProfiles);
                setPaginationObject({
                    totalPages: response.data.totalPages,
                    currentPage: response.data.currentPage,
                    pageIndexes: response.data.pageIndexes,
                });
            } catch (error) {
                console.error(error);
            }
        }
        getTutorProfiles();
    }, []);

    return (
        <div className="text-center container-fluid p-3 ps-0 pe-0">
            <div className="mb-3" style={divStyle}>
                <TutorSearch />
            </div>
            <div>
                <hr className="m-0" />
            </div>
            <div className="" style={divStyle}>
                <Results
                    tutorProfilesArray={tutorProfilesArray}
                    paginationObject={paginationObject}
                />
            </div>
        </div>
    );
}

export default Main;
