import { useEffect, useState } from "react";
import useCookie from "hooks/useCookie";
import "./Conversation.css";
import axios from "axios";

function Conversation({ conversation, currentUser, currentChat }) {
    const [user, setUser] = useState(null);
    const [avatarURL, setAvatarURL] = useState();
    const getCookie = useCookie;

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

                await axios
                    .get(
                        `${process.env.REACT_APP_BASE_URL}/users/${friendId}/avatar`,
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
                console.log("Error fetching conversation user: ", e);
            }
        };
        getUser();
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
                <span className="conversationUser">{`${user?.firstName} ${user?.lastName}`}</span>
                <span className="conversationCreated">Created 1 month ago</span>
            </div>
        </div>
    );
}

export default Conversation;
