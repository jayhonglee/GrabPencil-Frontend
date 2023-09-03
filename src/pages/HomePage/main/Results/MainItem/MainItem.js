// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import portrait from "../SliderItem/sampleData/portrait.jpg";
import SFULogo from "../SliderItem/sampleData/SFULogo.png";

function MainItem() {
    const cardStyle = {
        width: "100%",
        height: "95vh",
        background: "#35b234",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: "1rem",
    };

    const headerStyle = {
        // height: "35%",
        position: "relative",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        zIndex: "1",
    };

    const inHeaderOneStyle = {
        width: "100%",
        height: "6rem",
    };

    const inHeaderTwoStyle = {
        background: "#fff",
        width: "100%",
        textAlign: "left",
    };

    const inHeaderCircleStyle = {
        width: "7rem",
        height: "7rem",
        background: "#fff",
        borderRadius: "100%",
        position: "absolute",
        top: "6rem",
        left: "3%",
        transform: "translateY(-3.5rem)",
    };

    const bodyStyle = {
        overflowY: "scroll",
        background: "#FBFBFB",
    };

    return (
        <div
            id="profileCard"
            className="card border-0 mt-3 d-flex flex-column"
            style={cardStyle}
        >
            <div className="d-flex flex-column" style={headerStyle}>
                <div style={inHeaderOneStyle} />
                <div className="py-2 px-4" style={inHeaderTwoStyle}>
                    <div className="d-flex justify-content-end pb-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ background: "#35b234", border: "none" }}
                        >
                            Message
                        </button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div
                            style={{
                                lineHeight: "1.2",
                            }}
                        >
                            <span
                                style={{
                                    textAlign: "left",
                                    fontSize: "24px",
                                }}
                                className="m-0"
                            >
                                <b>Jaehong Lee</b>
                            </span>
                        </div>
                    </div>
                    <p
                        style={{ color: "grey", lineHeight: "1.2" }}
                        className="m-0 pb-3"
                    >
                        <i>from SFU</i>
                    </p>
                    <div style={{ color: "grey" }} className="d-flex flex-wrap">
                        <span className="me-3">
                            <FontAwesomeIcon icon={"dollar"} className="me-1" />
                            25
                        </span>
                        <span className="me-3">
                            <FontAwesomeIcon
                                icon={"location"}
                                className="me-1"
                            />
                            Coquitlam
                        </span>
                        <span className="me-3">
                            <FontAwesomeIcon icon={"male"} className="me-1" />
                            Male
                        </span>
                        <span className="me-3">
                            <FontAwesomeIcon
                                icon={"question"}
                                className="me-1"
                            />
                            21
                        </span>
                        <span className="me-3">
                            <FontAwesomeIcon icon={"globe"} className="me-1" />
                            Online or In-person
                        </span>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={inHeaderCircleStyle}
                >
                    <img
                        src={portrait}
                        alt="profile"
                        width="93%"
                        height="93%"
                        style={{ borderRadius: "100%" }}
                    />
                </div>
            </div>
            <div style={bodyStyle} className="flex-grow-1 px-4 py-3">
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-2">
                        <p className="m-0 text-start fs-5">
                            <b>Education</b>
                        </p>
                    </div>
                    <div className="d-flex">
                        <div className="me-2">
                            <img
                                src={SFULogo}
                                alt="profile"
                                width="48px"
                                height="48px"
                            />
                        </div>
                        <div className="d-flex flex-column">
                            <div>
                                <p
                                    className="m-0 text-start"
                                    style={{ fontWeight: "500" }}
                                >
                                    Simon Fraser University
                                </p>
                            </div>
                            <div>
                                <p className="m-0 text-start lh-sm">
                                    Bachelor of Applied Science - BASc, Computer
                                    Engineering
                                </p>
                            </div>
                            <div>
                                <p className="m-0 text-start lh-sm">
                                    2019 - 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-2">
                        <p className="m-0 text-start fs-5">
                            <b>Language(s)</b>
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="py-2 border-bottom">
                            <p className="text-start m-0">English</p>
                            <p
                                className="text-start m-0"
                                style={{ color: "grey" }}
                            >
                                Native or bilingual proficiency
                            </p>
                        </div>
                        <div className="py-2 border-bottom">
                            <p className="text-start m-0">Korean</p>
                            <p
                                className="text-start m-0"
                                style={{ color: "grey" }}
                            >
                                Native or bilingual proficiency
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-2">
                        <p className="m-0 text-start fs-5">
                            <b>Tutor Subject(s)</b>
                        </p>
                    </div>
                    <div>
                        <p className="text-start m-0">
                            PreCalculus • Calculus • Programming • Physics
                        </p>
                    </div>
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-2">
                        <p className="m-0 text-start fs-5">
                            <b>About Me</b>
                        </p>
                    </div>
                    <div>
                        <p className="text-start m-0">
                            I am a LICENSED teacher in multiple provinces in
                            Canada, teaching for 7+ years in both private and
                            public schools. I have taught more than 1500
                            students in the last 7 years. And most of them have
                            LOVED my teaching style. have degrees in Electronic
                            Engineering and Bachelor of Education. So I am super
                            qualified. But who cares! What’s important is that I
                            AM A GREAT TEACHER. Thats not me, those are my
                            students and teachers and principals who have said
                            this so many times about me, year after year.
                        </p>
                    </div>
                </div>
                <div
                    className="card mb-3 px-4 py-3"
                    style={{
                        border: "none",
                        background: "#fff",
                        boxShadow: "0px 7px 24px -8px rgba(0,0,0,0.1)",
                    }}
                >
                    <div className="pb-2">
                        <p className="m-0 text-start fs-5">
                            <b>About the Lesson</b>
                        </p>
                    </div>
                    <div>
                        <p className="text-start m-0">
                            My classes are engaging and fun where I let YOU do
                            work so you learn the best. I use tons of technology
                            - videos, games, puzzles, online manipulative,
                            Geogebra & Desmos etc. My examples are meaningful
                            and relevant to your life If you Play hockey or
                            basketball. if you work and earn income. Whatever
                            you do in your extra time ? that’s what I would like
                            to use in my examples I have degrees in Electronic
                            Engineering and Bachelor of Education. So I am super
                            qualified. But who cares! What’s important is that I
                            AM A GREAT TEACHER. Thats not me, those are my
                            students and teachers and principals who have said
                            this so many times about me, year after year. Please
                            check out these reviews in my listing
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainItem;
