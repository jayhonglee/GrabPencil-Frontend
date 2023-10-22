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

    useEffect(() => {
        async function getTutorProfiles() {
            try {
                const response = await axios.get(
                    "http://localhost:5000/tutorProfiles?pageSize=5&pageNumber=1&maxPageIndex=5"
                );
                setTutorProfilesArray(response.data.tutorProfiles);
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
                <Results tutorProfilesArray={tutorProfilesArray} />
            </div>
        </div>
    );
}

export default Main;
