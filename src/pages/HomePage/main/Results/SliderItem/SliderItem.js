import portrait from "./sampleData/portrait.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SliderItem({ data }) {
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
                        <div className="col-3 d-flex justify-content-center">
                            <div style={profileStyle} />
                        </div>
                        <div className="col-9">
                            <div className="text-start">
                                <b>{`${data.firstName} ${data.lastName}`}</b>
                                <span style={{ color: "grey" }}>
                                    <i>{` @`}</i>
                                    {`${data.school} · ${data.timeElapsed}`}
                                </span>
                            </div>
                            <div className="text-start">{data.aboutMe}</div>
                            <div
                                className="text-start pt-3"
                                style={{ color: "grey" }}
                            >
                                {renderInfo(
                                    "graduation-cap",
                                    `${data.major} (${data.gpa})`
                                )}
                                {renderInfo("book", data.subjects)}
                                {renderInfo(
                                    "chalkboard-teacher",
                                    data.lessonMethod
                                )}
                                {renderInfo(
                                    "location-dot",
                                    data.lessonLocation
                                )}
                                {renderInfo("comment", data.languages)}
                                {renderInfo("user", data.sex)}
                                {renderInfo("dollar-sign", data.hourlyRate)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function renderInfo(icon, text) {
    if (!icon || !text) return;

    return (
        <div className="d-flex">
            <div className="p-1">
                <FontAwesomeIcon icon={icon} color="grey" />
            </div>
            <div className="p-1">{text}</div>
        </div>
    );
}

export default SliderItem;
