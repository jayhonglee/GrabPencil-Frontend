import "./Message.css";
import { format } from "timeago.js";
import { useEffect, useState } from "react";

export default function Message({message, own, currentChatAvatarURLs}) {
    const [avatarURL, setAvatarURL] = useState();

    useEffect(()=> {
            setAvatarURL(currentChatAvatarURLs?.[message.sender])
    }, [message, currentChatAvatarURLs, own])

    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                className="messageImg"
                    src={avatarURL
                        ? `${avatarURL}`
                        : `/images/no_avatar.png`}
                    alt=""
                />
                <p className="messageText">{message.text}</p>
            </div>
                <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    );
}
