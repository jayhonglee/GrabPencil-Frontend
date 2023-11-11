import { useState, useRef, useEffect } from "react";
import Login from "./Login.js/Login";
import Signup from "./Signup/Signup";

function LoginPopUp({ isLoginVisible, setIsLoginVisible }) {
    const [email, setEmail] = useState("");
    const [emailIsFocused, setEmailIsFocused] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordIsFocused, setPasswordIsFocused] = useState(false);
    const [isSignupVisible, setIsSignupVisible] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [firstNameIsFocused, setFirstNameIsFocused] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameIsFocused, setLastNameIsFocused] = useState(false);
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpEmailIsFocused, setSignUpEmailIsFocused] = useState(false);
    const [passwordSignUp, setPasswordSignUp] = useState("");
    const [passwordSignUpIsFocused, setPasswordSignUpIsFocused] =
        useState(false);
    const [gender, setGender] = useState("");

    useEffect(() => {
        if (isLoginVisible) setIsSignupVisible(false);
    }, [isLoginVisible]);

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
        transition: "opacity 0.2s ease-in-out",
        opacity: isLoginVisible ? 1 : 0,
        pointerEvents: isLoginVisible ? "auto" : "none",
    };

    return (
        <div
            ref={shadeRef}
            style={shadeStyle}
            onClick={(e) => {
                if (e.target === shadeRef.current) {
                    setIsLoginVisible(false);
                }
            }}
            className="text-center"
        >
            <Login
                isLoginVisible={isLoginVisible}
                setIsLoginVisible={setIsLoginVisible}
                emailIsFocused={emailIsFocused}
                setEmailIsFocused={setEmailIsFocused}
                passwordIsFocused={passwordIsFocused}
                setPasswordIsFocused={setPasswordIsFocused}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isSignupVisible={isSignupVisible}
                setIsSignupVisible={setIsSignupVisible}
            />
            <Signup
                isSignupVisible={isSignupVisible}
                setIsLoginVisible={setIsLoginVisible}
                firstName={firstName}
                setFirstName={setFirstName}
                firstNameIsFocused={firstNameIsFocused}
                setFirstNameIsFocused={setFirstNameIsFocused}
                lastName={lastName}
                setLastName={setLastName}
                lastNameIsFocused={lastNameIsFocused}
                setLastNameIsFocused={setLastNameIsFocused}
                signUpEmail={signUpEmail}
                setSignUpEmail={setSignUpEmail}
                signUpEmailIsFocused={signUpEmailIsFocused}
                setSignUpEmailIsFocused={setSignUpEmailIsFocused}
                passwordSignUp={passwordSignUp}
                setPasswordSignUp={setPasswordSignUp}
                passwordSignUpIsFocused={passwordSignUpIsFocused}
                setPasswordSignUpIsFocused={setPasswordSignUpIsFocused}
                gender={gender}
                setGender={setGender}
            />
        </div>
    );
}

export default LoginPopUp;
