function Footer() {
    return (
        <div
            className="container-fluid p-0"
            style={{
                background: "rgb(255, 255, 255)",
                borderTop: "0.5rem solid #35b234",
                boxShadow: `0 -1px 1px 0 rgba(0, 0, 0, 0.2)`,
            }}
        >
            <div
                className="mx-auto mt-5"
                style={{ background: "", width: "85%" }}
            >
                <div className="mb-1" style={{ fontSize: "22px" }}>
                    StudentTutor
                </div>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Are you a student? Unleash Your Potential with Our Tutoring
                    Roles.
                </div>
                <div style={{ fontSize: "14px", color: "grey" }}>
                    Elevate Your Expertise: Transform into a Tutor and Inspire
                    the Future. Join our Community of Educators and Empower
                    Minds!
                </div>
                <div className="my-4">
                    <button
                        type="button"
                        className="btn btn-outline-primary me-3"
                        style={{
                            border: "1px solid #35b234",
                            color: "#35b234",
                        }}
                    >
                        About
                    </button>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        style={{
                            background: "#35b234",
                            color: "#fff",
                            border: "1px solid #35b234",
                        }}
                    >
                        Get started
                    </button>
                </div>
                <div>
                    <hr className="m-0" />
                </div>
                <div
                    className="d-flex justify-content-between align-items-center my-4"
                    style={{ color: "grey" }}
                >
                    <span>© Copyright by Jaehong Lee(Jay).</span>
                    <span>
                        <span className="me-3">Terms</span>
                        <span className="me-3">Privacy</span>
                        <span>Cookies</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
