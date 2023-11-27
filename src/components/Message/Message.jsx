import "./Message.css";
import { format } from "timeago.js";

export default function Message({message, own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                className="messageImg"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <p className="messageText">{message.text}</p>
            </div>
                <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    );
}
