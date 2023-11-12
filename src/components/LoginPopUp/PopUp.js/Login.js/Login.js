import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "slices/loginSlice";
import { useState } from "react";
import axios from "axios";
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
    setIsSignupVisible,
    fromState,
    setFromState,
}) {
    const [isRequired, setIsRequired] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        background: "#4285F4",
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

    const handleLogin = async () => {
        const list = ["email", "password"];

        try {
            await axios.post(
                `${process.env.REACT_APP_BASE_URL}/users/login`,
                {
                    email,
                    password,
                },
                { withCredentials: true }
            );

            dispatch(login());
            setIsRequired({});
            if (fromState) navigate(`/${fromState}`);
            setFromState(null);
        } catch (e) {
            console.error("Signup failed:", e.response.data);
            for (let i = 0; i < list.length; i++) {
                const item = list[i];
                if (e.response.data.includes(item)) {
                    setIsRequired((prev) => ({ ...prev, [item]: true }));
                } else {
                    setIsRequired((prev) => ({ ...prev, [item]: false }));
                }
            }
        }
    };

    return (
        <>
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
                onClick={handleLogin}
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
                <FontAwesomeIcon
                    className="me-2"
                    icon="circle-user"
                    style={{
                        color: "#fff",
                    }}
                />
                <span>Create new account</span>
            </div>
        </>
    );
}
