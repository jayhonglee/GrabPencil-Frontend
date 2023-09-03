import TutorSearch from "./TutorSearch/TutorSearch";
import Results from "./Results/Results";
import Pagination from "./Results/Pagination/Pagination";

function Main() {
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
                <Results />
            </div>
            {/* <div className="mt-3" style={divStyle}>
                <Pagination />
            </div> */}
        </div>
    );
}

export default Main;
