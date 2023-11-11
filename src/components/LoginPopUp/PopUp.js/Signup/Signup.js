import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenderSelect from "./GenderSelect/GenderSelect";
import Input from "../Input/Input";

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
}) {
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

    const login = {
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
                        />
                    </div>
                    <Input
                        value={lastName}
                        setValue={setLastName}
                        isFocus={lastNameIsFocused}
                        setIsFocus={setLastNameIsFocused}
                        text={"Last name"}
                    />
                </div>
                <Input
                    value={signUpEmail}
                    setValue={setSignUpEmail}
                    isFocus={signUpEmailIsFocused}
                    setIsFocus={setSignUpEmailIsFocused}
                    text={"E-mail address"}
                />
                <Input
                    value={passwordSignUp}
                    setValue={setPasswordSignUp}
                    isFocus={passwordSignUpIsFocused}
                    setIsFocus={setPasswordSignUpIsFocused}
                    text={"Create a password"}
                    password="yes"
                />
                <div style={genderSelectContainer}>
                    <GenderSelect gender={gender} setGender={setGender} />
                </div>
            </form>
            <div
                style={signupButtonStyle}
                className="d-flex justify-content-center align-items-center btn"
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
                    style={login}
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
