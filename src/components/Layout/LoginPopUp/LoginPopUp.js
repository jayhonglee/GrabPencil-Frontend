import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";

function LoginPopUp() {
    const [emailIsFocused, setEmailIsFocused] = useState(false);
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const shadeRef = useRef();

    const shadeStyle = {
        position: "fixed",
        width: "100%",
        height: "100%",
        background: "rgba(34,34,34,0.85)",
        top: "0px",
        left: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const popUpStyle = {
        position: "relative",
        width: "530px",
        height: "565px",
        background: "#fff",
        padding: "50px 90px",
        borderRadius: "20px",
    };

    const closeStyle = {
        border: "none",
        position: "absolute",
        top: "20px",
        right: "20px",
    };

    const loginText = {
        fontSize: "25px",
        fontWeight: "bold",
        marginBottom: "35px",
    };

    const formStyle = {
        height: "139px",
        marginBottom: "20px",
    };

    const inputStyle = {
        width: "100%",
        height: "57px",
        background: "rgb(247,247,247)",
        border: "none",
        outline: "none",
        padding: "18px",
        borderRadius: "5px",
        fontSize: "15px",
        fontWeight: "600",
    };

    const loginButtonStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        width: "100%",
        height: "57px",
        borderRadius: "5px",
        background: "#35B234",
        color: "#fff",
    };

    const forgottenStyle = {
        fontSize: "14px",
        color: "#35B234",
        marginTop: "16px",
        textDecoration: "none",
    };

    const createNewAccountStyle = {
        fontSize: "16px",
        fontWeight: "600",
        width: "257.78px",
        height: "48px",
        background: "#1877f2",
        margin: "6px auto",
        borderRadius: "5px",
        color: "#fff",
    };

    const line = {
        borderBottom: "1px solid #CCD0D5",
        width: "45%",
        height: "1%",
    };

    const orBlock = {
        width: "10%",
        height: "18px",
        fontSize: "14px",
        lineHeight: "18px",
    };

    return (
        <div
            ref={shadeRef}
            style={shadeStyle}
            onClick={(e) => {
                if (e.target === shadeRef.current) {
                    // Clicked on the shade itself (outside of the card)
                    console.log("clicked outside of login");
                }
            }}
        >
            <div className="card border-0" style={popUpStyle}>
                <FontAwesomeIcon
                    className="btn p-0"
                    icon="x"
                    color="black"
                    style={closeStyle}
                    onClick={() => console.log("clicked X")}
                />
                <p style={loginText}>Login to StudentTutor</p>
                <form
                    style={formStyle}
                    className="d-flex flex-column justify-content-between"
                >
                    <div style={{ position: "relative" }}>
                        <input
                            style={inputStyle}
                            onFocus={() => setEmailIsFocused(true)}
                            onBlur={() => setEmailIsFocused(false)}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="emailInput"
                        />
                        <label
                            style={{
                                position: "absolute",
                                left: "18px",
                                top: "50%",
                                transform: emailIsFocused
                                    ? "translateY(-100%)"
                                    : "translateY(-50%)",
                                color: "#C1A599",
                                fontWeight: "600",
                                transition: "all 0.3s",
                                opacity: emailIsFocused || email ? 0 : 1,
                            }}
                            htmlFor="emailInput"
                        >
                            E-mail address
                        </label>
                        <label
                            style={{
                                position: "absolute",
                                left: "0",
                                transform: emailIsFocused
                                    ? "translateY(-100%)"
                                    : "translateY(-80%)",
                                fontSize: "14px",
                                color: "#C1A599",
                                fontWeight: "500",
                                transition: "all 0.3s",
                                opacity: emailIsFocused ? 1 : 0,
                            }}
                        >
                            E-mail address
                        </label>
                    </div>
                    <div style={{ position: "relative" }}>
                        <input
                            style={inputStyle}
                            onFocus={() => setPasswordIsFocused(true)}
                            onBlur={() => setPasswordIsFocused(false)}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="passwordInput"
                        />
                        <label
                            style={{
                                position: "absolute",
                                left: "18px",
                                top: "50%",
                                transform: passwordIsFocused
                                    ? "translateY(-100%)"
                                    : "translateY(-50%)",
                                color: "#C1A599",
                                fontWeight: "600",
                                transition: "all 0.3s",
                                opacity: passwordIsFocused || password ? 0 : 1,
                            }}
                            htmlFor="passwordInput"
                        >
                            Password
                        </label>
                        <label
                            style={{
                                position: "absolute",
                                left: "0",
                                transform: passwordIsFocused
                                    ? "translateY(-100%)"
                                    : "translateY(-80%)",
                                fontSize: "14px",
                                color: "#C1A599",
                                fontWeight: "500",
                                transition: "all 0.3s",
                                opacity: passwordIsFocused ? 1 : 0,
                            }}
                        >
                            Password
                        </label>
                    </div>
                </form>
                <div
                    style={loginButtonStyle}
                    className="d-flex justify-content-center align-items-center btn"
                >
                    Login
                </div>
                <a style={forgottenStyle}>Forgotten Password?</a>
                <div className="d-flex justify-content-between align-items-center my-3">
                    <div style={line} />
                    <div style={orBlock}>or</div>
                    <div style={line} />
                </div>
                <div
                    style={createNewAccountStyle}
                    className="d-flex justify-content-center align-items-center btn"
                >
                    Create new account
                </div>
            </div>
        </div>
    );
}

export default LoginPopUp;
