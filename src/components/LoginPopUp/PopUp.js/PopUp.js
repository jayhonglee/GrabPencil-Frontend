import Login from "./Login.js/Login";
import Signup from "./Signup/Signup";

export default function PopUp({
    isLoginVisible,
    setIsLoginVisible,
    emailIsFocused,
    setEmailIsFocused,
    passwordIsFocused,
    setPasswordIsFocused,
    email,
    setEmail,
    password,
    setPassword,
    isSignupVisible,
    setIsSignupVisible,
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
    const popUpStyle = {
        position: "relative",
        width: "530px",
        height: !isSignupVisible ? "565px" : "652px",
        padding: "50px 90px",
        borderRadius: "20px",
        transition: "all 0.3s ease-out",
    };

    return (
        <div className="card border-0" style={popUpStyle}>
            {!isSignupVisible ? (
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
            ) : (
                <Signup
                    isSignupVisible={isSignupVisible}
                    setIsSignupVisible={setIsSignupVisible}
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
            )}
        </div>
    );
}
