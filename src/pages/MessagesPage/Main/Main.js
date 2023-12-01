import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
import Loading from "./Loading/Loading";
import axios from "axios";
import useCookie from "hooks/useCookie";
import Conversation from "components/Conversation/Conversation";
import Message from "components/Message/Message";
import ChatOnline from "components/ChatOnline/ChatOnline";

function Main({ setIsLoggedIn }) {
    const [isLoading, setIsLoading] = useState(true);
    const [chatOnlineIsLoading, setChatOnlineIsLoading] = useState(true);
    const [chatMenuIsLoading, setChatMenuIsLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [currentChatAvatarURLs, setCurrentChatAvatarURLS] = useState();
    const [messages, setMessages] = useState(null);
    const [message, setMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const [user, setUser] = useState();
    const contentEditableRef = useRef(null);
    const scrollRef = useRef(null);
    const isTyping = () => message !== "";

    const getCookie = useCookie;
    const navigate = useNavigate;
    const location = useLocation();

    const header = {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${getCookie("auth_token")}`,
        },
    };

    useEffect(() => {
        // set loading to false (when conversations are loaded and current users are loaded)
        if (!chatMenuIsLoading && !chatOnlineIsLoading) setIsLoading(false);

        // set current users loading to fasle when conversations are loaded and there are no conversations
        if (!chatMenuIsLoading && !currentChat) setChatOnlineIsLoading(false);

        // // set chatMenuIsLoading to false (when chat online is done loading after there are is no chat menu)
        // if (!chatOnlineIsLoading && conversations.length === 0)
        //     setChatMenuIsLoading(false);
    }, [chatOnlineIsLoading, chatMenuIsLoading]);

    useEffect(() => {
        const receiverId = location?.state?.receiverId;

        if (!receiverId || conversations.length === 0) return;

        const newConversation = conversations?.filter((c) => {
            return c.members.includes(receiverId);
        });

        setCurrentChat(newConversation[0]);
    }, [conversations]);

    useEffect(() => {
        socket.current = io(process.env.REACT_APP_SOCKET_ADDRESS);
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        if (!user?._id) return;

        socket.current.emit("addUser", user?._id);
        socket.current.on("getUsers", (users) => {
            setOnlineUsers(users);
        });
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
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
                if (response.data.length === 0) setChatMenuIsLoading(false);
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

        const getAvatar = async () => {
            if (!currentChat || !currentChat.members) return;

            try {
                const avatarURLs = {};

                for (const m of currentChat.members) {
                    try {
                        const avatarRes = await axios.get(
                            `${process.env.REACT_APP_BASE_URL}/users/${m}/avatar`,
                            {
                                responseType: "arraybuffer",
                            }
                        );

                        const avatarBlob = new Blob([avatarRes.data], {
                            type: "image/png",
                        });
                        const avatarURL = URL.createObjectURL(avatarBlob);

                        avatarURLs[m] = avatarURL;
                    } catch (e) {
                        console.log(`Error fetching avatar for user ${m}: `, e);
                        avatarURLs[m] = null;
                    }
                }

                setCurrentChatAvatarURLS(avatarURLs);
            } catch (e) {
                console.log("Error fetching avatar:", e);
            }
        };

        getMessages();
        getAvatar();
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

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );

        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: message,
        });

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
        <div className="m-0 p-0">
            {isLoading && <Loading isLoading={isLoading} />}
            <div
                className="messenger p-0 text-start"
                style={{
                    width: "100%",
                    opacity: isLoading ? "0" : "1",
                    pointerEvents: isLoading && "none",
                    visibility: isLoading ? "hidden" : "visible",
                    overflow: isLoading ? "hidden" : "auto",
                    height: isLoading && "0",
                }}
            >
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
                            {conversations.length !== 0
                                ? conversations.map((c, n) => (
                                      <div
                                          onClick={() => {
                                              setCurrentChat(c);
                                              console.log(c);
                                          }}
                                          key={n}
                                      >
                                          <Conversation
                                              conversation={c}
                                              currentUser={user}
                                              currentChat={currentChat}
                                              setChatMenuIsLoading={
                                                  n ===
                                                      conversations.length -
                                                          1 &&
                                                  setChatMenuIsLoading
                                              }
                                          />
                                      </div>
                                  ))
                                : null}
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
                                                own={
                                                    message.sender === user._id
                                                }
                                                currentChatAvatarURLs={
                                                    currentChatAvatarURLs
                                                }
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
                                                pointerEvents:
                                                    isTyping() && "none",
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
                        <ChatOnline
                            onlineUsers={onlineUsers}
                            currentId={user?._id}
                            currentChat={currentChat}
                            setChatOnlineIsLoading={setChatOnlineIsLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
