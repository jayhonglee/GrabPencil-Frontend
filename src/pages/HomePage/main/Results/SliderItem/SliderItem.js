import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function SliderItem({ data, onClick, currentTutorProfile }) {
    const [sliderItemOnMouseOver, setSliderItemOnMouseOver] = useState(false);
    const [sliderItemOnMouseDown, setSliderItemOnMouseDown] = useState(false);

    const isCurrentTutorProfile = currentTutorProfile?._id === data._id;

    const profileStyle = {
        backgroundImage: data.avatarURL
            ? `url(${data.avatarURL})`
            : `url(/images/no_avatar.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
    };

    const cardStyle = {
        boxShadow: sliderItemOnMouseOver
            ? "0 1px 3px rgba(0, 0, 0, 0.2)"
            : "0 1px 1px rgba(0, 0, 0, 0.2)",
        cursor: sliderItemOnMouseOver ? "pointer" : "default",
        border: sliderItemOnMouseDown
            ? "1px solid grey"
            : isCurrentTutorProfile
            ? "1px solid #35b234"
            : "1px solid transparent",
    };

    const nameStyle = {
        textDecoration: sliderItemOnMouseOver ? "underline" : "",
    };

    return (
        <div
            className="card mt-3"
            style={cardStyle}
            onMouseEnter={() => setSliderItemOnMouseOver(true)}
            onMouseLeave={() => {
                setSliderItemOnMouseOver(false);
                setSliderItemOnMouseDown(false);
            }}
            onMouseDown={() => setSliderItemOnMouseDown(true)}
            onMouseUp={() => setSliderItemOnMouseDown(false)}
            onClick={onClick}
        >
            <div className="card-body ps-0 pe-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3 d-flex justify-content-center">
                            <div style={profileStyle} />
                        </div>
                        <div className="col-9">
                            <div className="text-start">
                                <b
                                    style={nameStyle}
                                >{`${data.firstName} ${data.lastName}`}</b>
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
                                    `${data.major} ${
                                        data.gpa ? `(${data.gpa})` : ""
                                    }`
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
