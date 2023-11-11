import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenderSelect from "./GenderSelect/GenderSelect";
import Input from "../Input/Input";

function Signup({
    isSignupVisible,
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
    const cardStyle = {
        width: "530px",
        height: "652px",
        borderRadius: "20px",
        padding: "50px 90px",
    };

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

    return (
        isSignupVisible && (
            <div style={cardStyle} className="card border-0">
                <FontAwesomeIcon
                    className="btn p-0"
                    icon="x"
                    color="black"
                    style={closeStyle}
                    onClick={() => setIsLoginVisible(false)}
                />
                <p style={singupText}>Signup</p>
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
            </div>
        )
    );
}

export default Signup;
