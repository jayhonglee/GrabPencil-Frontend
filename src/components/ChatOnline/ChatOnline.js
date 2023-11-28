import { useEffect, useState } from "react";
import "./ChatOnline.css";
import axios from "axios";
import useCookie from "hooks/useCookie";

export default function ChatOnline({ onlineUsers, currentId, currentChat }) {
    const [members, setMembers] = useState([]);
    const getCookie = useCookie;

    const header = {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${getCookie("auth_token")}`,
        },
    };

    useEffect(() => {
        // Get friend info
        const getUsers = async () => {
            if (!currentChat || !currentChat.members) return;

            const memberInfoArray = currentChat?.members?.map(
                async (member) => {
                    try {
                        const userRes = await axios.get(
                            `${process.env.REACT_APP_BASE_URL}/users/${member}`,
                            header
                        );

                        const online = onlineUsers
                            ?.map((user) => user.userId)
                            .includes(member);

                        let avatarURL = null;
                        try {
                            const avatarRes = await axios.get(
                                `${process.env.REACT_APP_BASE_URL}/users/${member}/avatar`,
                                {
                                    responseType: "arraybuffer",
                                }
                            );

                            const avatarBlob = new Blob([avatarRes.data], {
                                type: "image/png",
                            });
                            avatarURL = URL.createObjectURL(avatarBlob);
                        } catch (e) {
                            console.log("Error fetching avatar:", e);
                        }

                        return { user: userRes.data, avatarURL, online };
                    } catch (e) {
                        console.log("Error fetching user:", e);
                    }
                }
            );

            const memberInfoResults = await Promise.all(memberInfoArray);

            // Find the index of the current user in the memberInfoResults array
            const currentUserIndex = memberInfoResults.findIndex(
                (member) => member.user._id === currentId
            );

            if (currentUserIndex !== -1) {
                // Remove the current user from the array
                const currentUser = memberInfoResults.splice(
                    currentUserIndex,
                    1
                )[0];
                // Insert the current user as the first element in the array
                memberInfoResults.unshift(currentUser);
            }

            setMembers(memberInfoResults);
        };
        getUsers();
    }, [currentChat, onlineUsers]);

    return (
        <div className="chatOnline">
            {members?.map((m, n) => {
                return (
                    <div className="chatOnlineFriend" key={n}>
                        <div className="chatOnlineImgContainer">
                            <img
                                className="chatOnlineImg"
                                src={
                                    m.avatarURL
                                        ? `${m.avatarURL}`
                                        : `/images/no_avatar.png`
                                }
                                alt=""
                            />
                            <div
                                className={
                                    m.online
                                        ? "chatOnlineBadgeOutOnline"
                                        : "chatOnlineBadgeOutOffline"
                                }
                            >
                                <div
                                    className={
                                        m.online
                                            ? "chatOnlineBadgeInOnline"
                                            : "chatOnlineBadgeInOffline"
                                    }
                                />
                            </div>
                        </div>
                        <span className="chatOnlineName">
                            {m.user.firstName} {m.user.lastName}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
