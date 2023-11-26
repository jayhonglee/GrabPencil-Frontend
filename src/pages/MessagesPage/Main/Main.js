import Conversation from "components/Conversation/Conversation";
import "./Main.css";
import Message from "components/Message/Message";
import ChatOnline from "components/ChatOnline/ChatOnline";

function Main() {
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
                        <textarea
                            className="chatMessageInput"
                            placeholder="Aa"
                        ></textarea>
                        <button className="chatSubmitButton">Send</button>
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
