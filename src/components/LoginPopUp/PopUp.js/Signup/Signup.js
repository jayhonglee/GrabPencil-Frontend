import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "slices/loginSlice";
import GenderSelect from "./GenderSelect/GenderSelect";
import Input from "../Input/Input";
import axios from "axios";

function Signup({
    setIsSignupVisible,
    setIsLoginVisible,
    firstName,
    setFirstName,
    firstNameIsFocused,
    setFirstNameIsFocused,
    lastName,
    setLastName,
    lastNameIsFocused,
    setLastNameIsFocused,
    signUpEmail,
    setSignUpEmail,
    signUpEmailIsFocused,
    setSignUpEmailIsFocused,
    passwordSignUp,
    setPasswordSignUp,
    passwordSignUpIsFocused,
    setPasswordSignUpIsFocused,
    gender,
    setGender,
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

    const singupText = {
        fontSize: "25px",
        fontWeight: "bold",
        marginBottom: "35px",
    };

    const formStyle = {
        height: "303px",
        marginBottom: "20px",
    };

    const genderSelectContainer = {
        position: "relative",
        width: "100%",
        height: "57px",
    };

    const signupButtonStyle = {
        fontSize: "15px",
        fontWeight: "600",
        width: "100%",
        height: "55px",
        borderRadius: "5px",
        background: "#35B234",
        color: "#fff",
        marginBottom: "40px",
        border: "none",
    };

    const haveAccount = {
        fontSize: "15px",
        fontWeight: "600",
    };

    const loginStyle = {
        ...haveAccount,
        color: "#35B234",
        padding: "0",
        border: "none",
        verticalAlign: "baseLine",
    };

    const footer = {
        marginTop: "20px",
        fontSize: "14px",
        color: "#999",
    };

    const termsCondition = {
        textDecoration: "underline",
        color: "black",
    };

    const handleSignUp = async () => {
        const list = ["firstName", "lastName", "email", "password", "gender"];

        try {
            await axios.post(
                `${process.env.REACT_APP_BASE_URL}/users`,
                {
                    firstName,
                    lastName,
                    email: signUpEmail,
                    password: passwordSignUp,
                    gender,
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
            <p style={singupText}>Sign up</p>
            <form
                style={formStyle}
                className="d-flex flex-column justify-content-between"
            >
                <div className="d-flex justify-content-between">
                    <div style={{ marginRight: "20px" }}>
                        <Input
                            value={firstName}
                            setValue={setFirstName}
                            isFocus={firstNameIsFocused}
                            setIsFocus={setFirstNameIsFocused}
                            text={"First name"}
                            isRequired={isRequired["firstName"]}
                        />
                    </div>
                    <Input
                        value={lastName}
                        setValue={setLastName}
                        isFocus={lastNameIsFocused}
                        setIsFocus={setLastNameIsFocused}
                        text={"Last name"}
                        isRequired={isRequired["lastName"]}
                    />
                </div>
                <Input
                    value={signUpEmail}
                    setValue={setSignUpEmail}
                    isFocus={signUpEmailIsFocused}
                    setIsFocus={setSignUpEmailIsFocused}
                    text={"E-mail address"}
                    isRequired={isRequired["email"]}
                />
                <Input
                    value={passwordSignUp}
                    setValue={setPasswordSignUp}
                    isFocus={passwordSignUpIsFocused}
                    setIsFocus={setPasswordSignUpIsFocused}
                    text={"Create a password"}
                    password="yes"
                    isRequired={isRequired["password"]}
                />
                <div style={genderSelectContainer}>
                    <GenderSelect
                        gender={gender}
                        setGender={setGender}
                        isRequired={isRequired["gender"]}
                    />
                </div>
            </form>
            <div
                style={signupButtonStyle}
                className="d-flex justify-content-center align-items-center btn"
                onClick={handleSignUp}
            >
                <FontAwesomeIcon
                    className="btn p-0 me-2"
                    icon="envelope"
                    onClick={() => setIsLoginVisible(false)}
                    style={{ color: "#fff" }}
                />
                <span>Sign up by email</span>
            </div>
            <div style={haveAccount}>
                You already have an account?{" "}
                <span
                    className="btn"
                    style={loginStyle}
                    onClick={() => setIsSignupVisible(false)}
                >
                    Log in
                </span>
            </div>
            <div style={footer}>
                <p className="m-0">
                    By registering with your email, you agree to our <br />
                    <a href="" style={termsCondition}>
                        Terms & Conditions.
                    </a>
                </p>
            </div>
        </>
    );
}

export default Signup;
