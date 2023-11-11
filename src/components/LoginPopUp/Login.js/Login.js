import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Input/Input";

export default function Login({
    setIsLoginVisible,
    email,
    setEmail,
    emailIsFocused,
    setEmailIsFocused,
    password,
    setPassword,
    passwordIsFocused,
    setPasswordIsFocused,
    isSignupVisible,
    setIsSignupVisible,
}) {
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

    const handleSignUp = () => {
        setIsSignupVisible(true);
    };

    return (
        isSignupVisible || (
            <div className="card border-0" style={popUpStyle}>
                <FontAwesomeIcon
                    className="btn p-0"
                    icon="x"
                    color="black"
                    style={closeStyle}
                    onClick={() => setIsLoginVisible(false)}
                />
                <p style={loginText}>Login to StudentTutor</p>
                <form
                    style={formStyle}
                    className="d-flex flex-column justify-content-between"
                >
                    <Input
                        value={email}
                        setValue={setEmail}
                        isFocus={emailIsFocused}
                        setIsFocus={setEmailIsFocused}
                        text={"E-mail address"}
                    />
                    <Input
                        value={password}
                        setValue={setPassword}
                        isFocus={passwordIsFocused}
                        setIsFocus={setPasswordIsFocused}
                        text={"Password"}
                        password="yes"
                    />
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
                    onClick={handleSignUp}
                >
                    Create new account
                </div>
            </div>
        )
    );
}
