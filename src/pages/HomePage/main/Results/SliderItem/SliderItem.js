import portrait from "./sampleData/portrait.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SliderItem() {
    const profileStyle = {
        background: `url(${portrait}) no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "100%",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
    };

    const cardStyle = {
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
    };

    return (
        <div className="card border-0 mt-3" style={cardStyle}>
            <div className="card-body ps-0 pe-0">
                <div className="container-fluid">
                    <div className="row">
                        <div
                            className="col-3 d-flex justify-content-center"
                            style={
                                {
                                    // background: "red",
                                }
                            }
                        >
                            <div style={profileStyle} />
                        </div>
                        <div
                            className="col-9"
                            style={
                                {
                                    // background: "blue",
                                }
                            }
                        >
                            <div className="text-start">
                                <b>{`Jaehong Lee `}</b>
                                <span style={{ color: "grey" }}>
                                    <i>{`from `}</i>
                                    {`SFU · 3h`}
                                </span>
                            </div>
                            <div className="text-start">
                                I am a fourth year computer engineering student
                                with an honour's distinction with multiple
                                awards in math, chemistry and biology. I also
                                have three years of working experience as a
                                teaching assistant.
                            </div>
                            <div
                                className="text-start pt-3"
                                style={{ color: "grey" }}
                            >
                                <div>
                                    <span className="p-1">
                                        <span className="p-1">
                                            <FontAwesomeIcon
                                                icon={"book"}
                                                color="grey"
                                            />
                                        </span>
                                        <span className="p-1">
                                            Computer Engineering (3.0 GPA)
                                        </span>
                                    </span>
                                </div>
                                <div className="d-flex">
                                    <div className="p-1">
                                        <FontAwesomeIcon
                                            icon={"chalkboard-teacher"}
                                            color="grey"
                                        />
                                    </div>
                                    <div className="p-1">
                                        Mathematics, Engineering and Biology
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-1">
                                        <FontAwesomeIcon
                                            icon={"globe"}
                                            color="grey"
                                        />
                                    </div>
                                    <div className="p-1">
                                        Online or In-person
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-1">
                                        <FontAwesomeIcon
                                            icon={"location"}
                                            color="grey"
                                        />
                                    </div>
                                    <div className="p-1">Coqtuilam</div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-1">
                                        <FontAwesomeIcon
                                            icon={"language"}
                                            color="grey"
                                        />
                                    </div>
                                    <div className="p-1">Korean, English</div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-1">
                                        <FontAwesomeIcon
                                            icon={"male"}
                                            color="grey"
                                        />
                                    </div>
                                    <div className="p-1">Male</div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-1">
                                        <FontAwesomeIcon
                                            icon={"question"}
                                            color="grey"
                                        />
                                    </div>
                                    <div className="p-1">21</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // Name*, School*, Major* (GPA), Teaching Subject*, Remote/In-person*, Location*, Language Spoken*, sex, age */}
                {/* <div className="d-flex justify-content-end align-items-center">
                    <img
                        src={UBCLogo2}
                        alt="School Logo"
                        width="auto"
                        height="35px"
                    />
                </div>
                <div>
                    <div className="d-flex justify-content-start align-items-center">
                        <div style={profileStyle} />
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        <h5>Jaehong Lee - Math Tutor</h5>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                        <p className="m-0">Simon Fraser University </p>
                        <p>Computer Engineering Major - 4th year</p>
                    </div>
                    <p className="d-flex justify-content-start">
                        Remote or In-person
                    </p>
                </div> 
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                */}
            </div>
        </div>
    );
}

export default SliderItem;
