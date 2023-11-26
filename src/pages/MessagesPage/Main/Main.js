import Conversation from "components/Conversation/Conversation";
import "./Main.css";
import Message from "components/Message/Message";

function Main() {
    return (
        <div className="messenger p-0 text-start">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input
                        placeholder="Search for friends"
                        className="chatMenuInput"
                    />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <div className="chatBoxBottom"></div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">online</div>
            </div>
        </div>
    );
}

export default Main;
