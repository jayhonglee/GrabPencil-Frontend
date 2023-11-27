import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCookie from "hooks/useCookie";
import Conversation from "components/Conversation/Conversation";
import Message from "components/Message/Message";
import ChatOnline from "components/ChatOnline/ChatOnline";

function Main({ setIsLoggedIn }) {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState();
    const contentEditableRef = useRef(null);
    const scrollRef = useRef(null);
    const isTyping = () => message !== "";

    const getCookie = useCookie;
    const navigate = useNavigate;

    const header = {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${getCookie("auth_token")}`,
        },
    };

    useEffect(() => {
        const getConversations = async () => {
            try {
                // setIsLoading(true);

                // Check valid token
                const responseToken = await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/checkAuthToken`,
                    {},
                    header
                );

                // Get user
                setUser(responseToken.data.user);

                // Get conversations
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/conversations/me`,
                    header
                );
                setConversations(response.data);

                // setIsLoading(false);
            } catch (e) {
                if (
                    e.request.url.includes("/checkAuthToken") &&
                    e.response !== 200
                ) {
                    localStorage.setItem("isLoggedIn", "false");
                    setIsLoggedIn(false);
                    navigate("/");
                }
                // setIsLoading(false);
            }
        };
        getConversations();
    }, []);

    useEffect(() => {
        const getMessages = async () => {
            try {
                // Get messages
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/messages/${currentChat?._id}`,
                    header
                );
                setMessages(response.data);
            } catch (e) {
                console.log("Error fetching messages: ", e);
            }
        };
        getMessages();
    }, [currentChat]);

    useEffect(() => {
        scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = async () => {
        if (!message.trim()) return;

        const newMessage = {
            conversation: currentChat._id,
            sender: user._id,
            text: message.trim(),
        };

        try {
            // Store new message
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/messages`,
                newMessage,
                header
            );
            setMessages([...messages, response.data]);

            // Clear contentEditable div's innerText
            contentEditableRef.current.innerText = "";
            setMessage("");
        } catch (e) {
            console.log("Error sending message: ", e);
        }
    };

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
                        {conversations.map((c, n) => (
                            <div onClick={() => setCurrentChat(c)} key={n}>
                                <Conversation
                                    conversation={c}
                                    currentUser={user}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {currentChat ? (
                        <>
                            <div className="chatBoxTop">
                                {messages?.map((message, n) => (
                                    <div ref={scrollRef} key={n}>
                                        <Message
                                            message={message}
                                            own={message.sender === user._id}
                                        />
                                    </div>
                                ))}
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
                                        ref={contentEditableRef}
                                        onInput={(e) => {
                                            const content =
                                                e.target.innerText.replace(
                                                    /\n$/,
                                                    ""
                                                );
                                            setMessage(content);
                                        }}
                                        onKeyDown={(e) => {
                                            if (
                                                e.key === "Enter" &&
                                                !e.shiftKey
                                            ) {
                                                e.preventDefault();
                                                handleSubmit();
                                            }
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
                                            color: "#65676B",
                                        }}
                                    >
                                        Aa
                                    </div>
                                </div>
                                <FontAwesomeIcon
                                    className="chatSubmitButton"
                                    icon={"paper-plane"}
                                    color={"#35b234"}
                                    onClick={handleSubmit}
                                />
                            </div>
                        </>
                    ) : (
                        <span
                            className="noConversationText d-flex flex-column"
                            style={{ color: "#35b234" }}
                        >
                            <FontAwesomeIcon
                                icon={"comment-dots"}
                                style={{
                                    width: "150px",
                                    height: "110px",
                                    color: "#35b234",
                                    marginBottom: "10px",
                                }}
                            />
                            No Conversation Selected
                        </span>
                    )}
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
