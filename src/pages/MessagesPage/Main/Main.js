import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Conversation from "components/Conversation/Conversation";
import Message from "components/Message/Message";
import ChatOnline from "components/ChatOnline/ChatOnline";

function Main() {
    const [message, setMessage] = useState("");

    const isTyping = () => message !== "";
    console.log(message.length, isTyping());

    return (
        <div className="messenger p-0 text-start">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <div className="chatMenuInputWrapper">
                        <h1 className="m-0">Message</h1>
                        <input
                            placeholder="🔍 Conversation search"
                            className="chatMenuInput"
                        />
                    </div>
                    <div className="chatWrapper">
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        {/* <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation /> */}
                    </div>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own={true} />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <div className="chatBoxBottom">
                        <div
                            style={{
                                backgroundColor: "#F0F2F5",
                                borderRadius: "18px",
                                width: "95%",
                                minHeight: "36.09px",
                                maxHeight: "140px",
                                boxSizing: "border-box",
                                padding: "8px 12px",
                                position: "relative",
                            }}
                        >
                            <div
                                className="chatMessageInput"
                                contentEditable
                                onInput={(e) => {
                                    const content = e.target.innerText.replace(
                                        /\n$/,
                                        ""
                                    );
                                    setMessage(content);
                                }}
                            />
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{
                                    position: "absolute",
                                    left: "12px",
                                    top: "8px",
                                    lineHeight: "20.078px",
                                    opacity: isTyping() ? "0" : "1",
                                    pointerEvents: isTyping() && "none",
                                }}
                            >
                                Aa
                            </div>
                        </div>
                        <FontAwesomeIcon
                            className="chatSubmitButton"
                            icon={"paper-plane"}
                            color={"#35b234"}
                        />
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline />
                </div>
            </div>
        </div>
    );
}

export default Main;
