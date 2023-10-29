import React from "react";

const containerStyle = {
    maxWidth: "300px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
};

const inputStyle = {
    width: "100%",
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
};

const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

const facebookButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#3b5998", // Facebook blue color
};

const googleButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4285F4", // Google blue color
};

const socialButtonStyle = {
    width: "100%",
    padding: "10px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
};

const facebookIconStyle = {
    fontSize: "24px",
    marginRight: "10px",
};

const googleIconStyle = {
    fontSize: "24px",
    marginRight: "10px",
};

const signupLinkStyle = {
    textDecoration: "none",
    color: "#007bff",
};

function TestPage() {
    return (
        <div style={containerStyle}>
            <h1>LOGIN PAGE</h1>

            <div style={containerStyle}>
                <input
                    type="text"
                    placeholder="Username or Email"
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={inputStyle}
                />
            </div>

            <button style={buttonStyle}>Login</button>

            <div style={containerStyle}>
                <button style={facebookButtonStyle}>
                    <div style={socialButtonStyle}>Login with Facebook</div>
                </button>
                <button style={googleButtonStyle}>
                    <div style={socialButtonStyle}>Login with Google</div>
                </button>
            </div>

            <p>
                Don't have an account?{" "}
                <a href="/signup" style={signupLinkStyle}>
                    Sign up
                </a>
            </p>
        </div>
    );
}

export default TestPage;
