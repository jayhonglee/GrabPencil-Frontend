import { useEffect, useState } from "react";
import useCookie from "hooks/useCookie";
import "./Conversation.css";
import axios from "axios";
import { format } from "timeago.js";

function Conversation({
    conversation,
    currentUser,
    currentChat,
    setChatMenuIsLoading,
}) {
    const [user, setUser] = useState(null);
    const [avatarURL, setAvatarURL] = useState();
    const getCookie = useCookie;

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

    useEffect(() => {
        // Check if both image and user data have loaded
        if (isImageLoaded && isUserDataLoaded && setChatMenuIsLoading) {
            setChatMenuIsLoading(false);
        }
    }, [isImageLoaded, isUserDataLoaded, setChatMenuIsLoading]);

    const header = {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${getCookie("auth_token")}`,
        },
    };

    useEffect(() => {
        // Get conversation target (friend) id
        const friendId = conversation.members.find(
            (member) => member !== currentUser._id
        );

        // Get friend info
        const getUser = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/users/${friendId}`,
                    header
                );
                setUser(response.data);
                setIsUserDataLoaded(true);
            } catch (e) {
                console.log("Error fetching conversation user: ", e);
                setIsUserDataLoaded(true);
            }
        };

        const getAvatar = async () => {
            try {
                const avatarResponse = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/users/${friendId}/avatar`,
                    { responseType: "arraybuffer" }
                );

                const blob = new Blob([avatarResponse.data], {
                    type: "image/png",
                });
                const imageUrl = URL.createObjectURL(blob);
                setAvatarURL(imageUrl);
                setIsImageLoaded(true);
            } catch (e) {
                console.log("Error fetching avatar: ", e);
                setIsImageLoaded(true);
            }
        };

        getUser();
        getAvatar();
    }, [currentUser, conversation]);

    return (
        <div
            className="conversation"
            style={{
                backgroundColor:
                    currentChat?._id === conversation?._id && "#EBF5FF",
            }}
        >
            <img
                className="conversationImg"
                src={avatarURL ? `${avatarURL}` : `/images/no_avatar.png`}
                alt=""
            />
            <div className="conversationName d-flex flex-column">
                <span className="conversationUser">{`${
                    user?.firstName === undefined ? "" : user?.firstName
                } ${user?.lastName === undefined ? "" : user?.lastName}`}</span>
                <span className="conversationCreated">{`Created ${format(
                    conversation.createdAt
                )}`}</span>
            </div>
        </div>
    );
}

export default Conversation;
