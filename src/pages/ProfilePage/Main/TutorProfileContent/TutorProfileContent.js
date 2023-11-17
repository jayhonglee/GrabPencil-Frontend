import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import Right from "./Right/Right";
import axios from "axios";
import useCookie from "hooks/useCookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TutorProfileContent({ setIsLoggedIn }) {
    const [myTutorProfiles, setMyTutorProfiles] = useState([]);
    const [avatarURL, setAvatarURL] = useState();
    const [currentProfile, setCurrentProfile] = useState();
    const getCookie = useCookie;
    const navigate = useNavigate();
    const header = {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${getCookie("auth_token")}`,
        },
    };

    useEffect(() => {
        const getMyTutorProfiles = async () => {
            try {
                // Check valid token
                const responseToken = await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/checkAuthToken`,
                    {},
                    {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${getCookie("auth_token")}`,
                        },
                    }
                );

                // Get user profile (avatar)
                const userId = responseToken.data.user._id;

                await axios
                    .get(
                        `${process.env.REACT_APP_BASE_URL}/users/${userId}/avatar`,
                        { responseType: "arraybuffer" }
                    )
                    .then((response) => {
                        const blob = new Blob([response.data], {
                            type: "image/png",
                        });
                        const imageUrl = URL.createObjectURL(blob);
                        setAvatarURL(imageUrl);
                    });

                // Get my tutor profiles
                const responseTP = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/tutorProfiles/me?sortBy=createdAt:Newest&pageSize=1000&pageNumber=1&maxPageIndex=1`,
                    header
                );
                setCurrentProfile(responseTP.data.tutorProfiles[0] || "create");
                setMyTutorProfiles(responseTP.data.tutorProfiles);
            } catch (e) {
                if (
                    e.request.url.includes("/checkAuthToken") &&
                    e.response !== 200
                ) {
                    localStorage.setItem("isLoggedIn", "false");
                    setIsLoggedIn(false);
                    navigate("/");
                }
            }
        };
        getMyTutorProfiles();
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <Aside
                myTutorProfiles={myTutorProfiles}
                avatarURL={avatarURL}
                currentProfile={currentProfile}
                setCurrentProfile={setCurrentProfile}
            />
            <Main currentProfile={currentProfile} />
            <Right />
        </div>
    );
}

export default TutorProfileContent;
