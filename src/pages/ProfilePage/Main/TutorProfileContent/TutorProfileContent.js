import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import Right from "./Right/Right";
import axios from "axios";
import LoadingScreen from "components/LoadingScreen/LoadingScreen";
import useCookie from "hooks/useCookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TutorProfileContent({ setIsLoggedIn }) {
    const [isLoading, setIsLoading] = useState(true);
    const [myTutorProfiles, setMyTutorProfiles] = useState([]);
    const [avatarURL, setAvatarURL] = useState();
    const [currentProfile, setCurrentProfile] = useState();
    const [userName, setUserName] = useState();
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
                setIsLoading(true);

                // Check valid token
                const responseToken = await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/checkAuthToken`,
                    {},
                    header
                );

                // Get my tutor profiles
                const responseTP = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/tutorProfiles/me?sortBy=createdAt:Newest&pageSize=1000&pageNumber=1&maxPageIndex=1`,
                    header
                );
                setCurrentProfile("create");
                setMyTutorProfiles(responseTP.data.tutorProfiles);
                setIsLoading(false);

                // Get user profile (avatar) & user name
                const userId = responseToken.data.user._id;
                setUserName(responseToken.data.user.firstName);

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
            } catch (e) {
                if (
                    e.request.url.includes("/checkAuthToken") &&
                    e.response !== 200
                ) {
                    localStorage.setItem("isLoggedIn", "false");
                    setIsLoggedIn(false);
                    navigate("/");
                }
                setIsLoading(false);
            }
        };
        getMyTutorProfiles();
    }, []);

    return isLoading ? (
        <LoadingScreen />
    ) : (
        <div className="d-flex justify-content-center">
            <Aside
                myTutorProfiles={myTutorProfiles}
                avatarURL={avatarURL}
                currentProfile={currentProfile}
                setCurrentProfile={setCurrentProfile}
            />
            <Main currentProfile={currentProfile} />
            <Right avatarURL={avatarURL} userName={userName} />
        </div>
    );
}

export default TutorProfileContent;
