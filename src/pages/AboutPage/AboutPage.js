import MainLayout from "components/Layout/MainLayout";
import Navbar from "components/Navbar/Navbar";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import useFetch from "hooks/useFetch";

function AboutPage({ isLoggedIn, setFromState }) {
    const colorTheme = useFetchColorTheme();
    const buttonsConfig = useFetch("navbar")[1].buttons;

    const generalCardStyle = {
        background: "#fff",
        width: "339.67px",
        height: "339.67px",
        padding: "30px",
        borderRadius: "20px",
        margin: "20px 0",
    };

    return (
        <MainLayout
            header={
                <Navbar
                    name={"GrabPencil ✏️"}
                    colorTheme={colorTheme}
                    buttonsConfig={buttonsConfig}
                    setFromState={setFromState}
                    isLoggedIn={isLoggedIn}
                />
            }
            content={
                <div className="about-page text-start d-flex justify-content-between align-items-center flex-wrap p-0">
                    <section style={generalCardStyle}>
                        <h3>What We Offer</h3>
                        <p>
                            Grab Pencil is a free tutor-matching and posting
                            website exclusively for university students. Our
                            platform offers a seamless experience for students
                            seeking tutors and tutors looking for opportunities
                            to share their knowledge and expertise.
                        </p>
                    </section>
                    <section style={generalCardStyle}>
                        <h3>How It Works</h3>
                        <p>
                            Students have the freedom to post tutor job listings
                            with detailed information similar to a resume,
                            enabling them to showcase their skills,
                            qualifications, and teaching style. Individuals
                            seeking tutoring services can effortlessly browse
                            through these listings and select the right tutor
                            based on their preferences and needs.
                        </p>
                    </section>
                    <section style={generalCardStyle}>
                        <h3>Simplified Connection</h3>
                        <p>
                            At Grab Pencil, our aim is to facilitate easy and
                            efficient connections. Once a match is made,
                            students and tutors can communicate in real-time
                            through our integrated chat feature. This direct
                            communication streamlines the process, ensuring a
                            smoother learning experience.
                        </p>
                    </section>
                    <section style={generalCardStyle}>
                        <h3>Our Mission</h3>
                        <p>
                            We're dedicated to fostering an environment where
                            learning thrives. Grab Pencil aims to empower both
                            tutors and students, making the search for academic
                            support an intuitive and straightforward journey.
                        </p>
                    </section>
                </div>
            }
            // footer={<div></div>}
        />
    );
}

export default AboutPage;
