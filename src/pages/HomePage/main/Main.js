import TutorSearch from "./TutorSearch/TutorSearch";
import Results from "./Results/Results";

function Main() {
    const divStyle = {
        width: "1148px",
        margin: "0 auto",
    };

    return (
        <div className="text-center container-fluid p-3 ps-0 pe-0">
            <div className="col" style={divStyle}>
                <TutorSearch />
            </div>
            <div className="col">
                <hr className="m-0" />
            </div>
            <div className="col" style={divStyle}>
                <Results />
            </div>
        </div>
    );
}

export default Main;
