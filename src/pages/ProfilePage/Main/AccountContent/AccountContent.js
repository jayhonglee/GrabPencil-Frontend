import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import useCookie from "hooks/useCookie";
import LoadingScreen from "components/LoadingScreen/LoadingScreen";

function AccountContent({ setIsLoggedIn }) {
    const [isLoading, setIsLoading] = useState(true);
    const [allowDelete, setAllowDelete] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [newGenderValue, setNewGenderValue] = useState();
    const [newFirstNameValue, setNewFirstNameValue] = useState();
    const [newLastNameValue, setNewLastNameValue] = useState();
    const [newPasswordValue, setNewPasswordValue] = useState("");
    const getCookie = useCookie;
    const navigate = useNavigate();
    const header = {
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${getCookie("auth_token")}`,
        },
    };

    useEffect(() => {
        const getAccountInfo = async () => {
            try {
                setIsLoading(true);

                // Check valid token
                await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/checkAuthToken`,
                    {},
                    header
                );

                // Read user info /users/me
                const userInfo = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/users/me`,
                    header
                );

                setUserInfo(userInfo.data);
                setNewGenderValue(userInfo.data.gender);
                setNewFirstNameValue(userInfo.data.firstName);
                setNewLastNameValue(userInfo.data.lastName);
                setIsLoading(false);
            } catch (e) {
                if (
                    e.request.url.includes("/checkAuthToken") &&
                    e.response !== 200
                ) {
                    localStorage.setItem("isLoggedIn", "false");
                    setIsLoggedIn(false);
                    navigate("/");
                }
                setIsLoading(false);
            }
        };
        getAccountInfo();
    }, []);

    async function handleUpdate(type) {
        if (type === "update") {
            try {
                const userData = {
                    firstName: newFirstNameValue,
                    lastName: newLastNameValue,
                    gender: newGenderValue,
                };

                // Check if newPasswordValue exists before adding it to the payload
                if (newPasswordValue) {
                    userData.password = newPasswordValue;
                }

                const response = await axios.patch(
                    `${process.env.REACT_APP_BASE_URL}/users/me`,
                    userData,
                    header
                );
                console.log("Updated:", response.data);

                navigate(0);
            } catch (e) {
                console.log("Error updating: ", e);
            }
        }
    }

    const wrapperStyle = {
        width: "100%",
        height: "100%",
    };

    const generalInfoStyle = {
        background: "#fff",
        width: "339.67px",
        padding: "30px",
        borderRadius: "5px",
    };

    const h1Style = {
        marginBottom: "30px",
        fontSize: "15px",
        fontWeight: "700",
    };

    const genderSelectStyle = {
        width: "100%",
        height: "53px",
        padding: "16px",
        border: "1px solid rgb(224, 224, 224)",
        cursor: "pointer",
    };

    const inputStyle = {
        height: "70px",
        marginBottom: "20px",
        position: "relative",
    };

    const labelStyle = {
        fontSize: "10px",
        fontWeight: "600",
        position: "absolute",
        bottom: "100%",
        left: "0%",
    };

    const buttonStyle = {
        width: "196.3px",
        height: "54px",
        borderRadius: "16px",
        margin: "0 auto",
        background: "#35b234",
        color: "#fff",
        fontWeight: "600",
    };

    const renderGenderOptions = ["Male", "Female", "Non-Binary"].map(
        (lang, n) => {
            return (
                <option key={n} value={lang}>
                    {lang}
                </option>
            );
        }
    );

    const renderInfo = Object.entries(userInfo)
        .filter((i) => {
            return ["firstName", "lastName", "email"].includes(i[0]);
        })
        .map(([key, value]) => (
            <div style={inputStyle} key={key}>
                <div className="text-start" style={labelStyle}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
                <input
                    style={genderSelectStyle}
                    className="text-start"
                    onChange={(e) => {
                        if (key === "firstName")
                            setNewFirstNameValue(e.target.value);
                        if (key === "lastName")
                            setNewLastNameValue(e.target.value);
                    }}
                    value={
                        key === "firstName"
                            ? newFirstNameValue
                            : key === "lastName"
                            ? newLastNameValue
                            : key === "email"
                            ? value
                            : ""
                    }
                    disabled={key === "email"}
                />
            </div>
        ));

    return isLoading ? (
        <LoadingScreen />
    ) : (
        <div
            className="d-flex justify-content-center align-items-start"
            style={wrapperStyle}
        >
            <div style={generalInfoStyle}>
                <h1 style={h1Style}>General Information ℹ️</h1>
                <div style={inputStyle}>
                    <div className="text-start" style={labelStyle}>
                        Gender
                    </div>
                    <select
                        className="form-select form-select-sm shadow-none"
                        aria-label="Small select example"
                        style={genderSelectStyle}
                        onChange={(e) => setNewGenderValue(e.target.value)}
                        value={newGenderValue}
                    >
                        {renderGenderOptions}
                    </select>
                </div>
                {renderInfo}
                <div style={inputStyle}>
                    <div className="text-start" style={labelStyle}>
                        Password
                    </div>
                    <input
                        type="password"
                        style={genderSelectStyle}
                        className="text-start"
                        onChange={(e) => {
                            setNewPasswordValue(e.target.value);
                        }}
                        value={newPasswordValue}
                    />
                </div>
                <div
                    style={buttonStyle}
                    className={`btn d-flex justify-content-center align-items-center ${
                        userInfo.firstName !== newFirstNameValue ||
                        userInfo.lastName !== newLastNameValue ||
                        userInfo.gender !== newGenderValue ||
                        newPasswordValue?.length >= 7
                            ? ""
                            : "disabled"
                    }`}
                    onClick={() => handleUpdate("update")}
                >
                    update
                </div>
            </div>
            <div style={{ ...generalInfoStyle, margin: "0 20px" }}>
                <div
                    style={{
                        marginBottom: "30px",
                        fontsize: "15px",
                        fontWeight: "700",
                    }}
                >
                    Delete Account 😭
                </div>
                <div
                    className="text-start"
                    style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginBottom: "20px",
                    }}
                >
                    Attention: Deleting your account will wipe out all your
                    data. Proceeding means saying goodbye to your information
                    forever.
                </div>
                <div
                    className="text-start d-flex align-items-center"
                    style={{
                        width: "279.69px",
                        height: "67.53px",
                        background: allowDelete
                            ? "#5bca8d"
                            : "rgb(247, 247, 247)",
                        padding: "20px",
                        color: allowDelete ? "#fff" : "#999999",
                        borderRadius: "5px",
                        fontSize: "15px",
                        fontWeight: "600",
                        cursor: "pointer",
                        marginBottom: "20px",
                    }}
                    onClick={() => setAllowDelete((prev) => !prev)}
                >
                    <FontAwesomeIcon
                        icon="check-circle"
                        style={{
                            width: "27px",
                            height: "27px",
                            marginRight: "5px",
                            color: allowDelete && "#fff",
                        }}
                    />
                    Delete my account
                </div>
                <div
                    className={`btn d-flex justify-content-center align-items-center ${
                        !allowDelete && "disabled"
                    }`}
                    style={{
                        width: "180px",
                        height: "39px",
                        borderRadius: "100px",
                        background: "#35b234",
                        color: "#fff",
                        margin: "0 auto",
                    }}
                >
                    Delete my account
                </div>
            </div>
            <div style={generalInfoStyle}>hi</div>
        </div>
    );
}

export default AccountContent;
