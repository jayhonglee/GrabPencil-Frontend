import "./Message.css";

export default function Message() {
    return (
        <div className="message">
            <div className="messageTop">
                <img
                className="messageImg"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
                <p className="messageText m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium quaerat dolor enim dicta incidunt, rem deleniti! Dolore, adipisci laboriosam.</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    );
}
