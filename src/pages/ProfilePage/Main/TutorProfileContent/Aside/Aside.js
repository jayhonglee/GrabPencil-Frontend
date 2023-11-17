import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "timeago.js";
import { useState } from "react";

function Aside({
    myTutorProfiles,
    avatarURL,
    currentProfile,
    setCurrentProfile,
}) {
    const [isHover, setIsHover] = useState({ state: false, profile: null });

    const createNewBtnStyle = {
        width: "200px",
        height: "80px",
        border: "solid #d9d9d9 1px",
        background: "#4285f4",
        borderRadius: "32px",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "24px",
        marginBottom: "16px",
    };

    const plusIconStyle = {
        color: "#fff",
        width: "24px",
        height: "24px",
        marginRight: "8px",
    };

    const renderProfileList = myTutorProfiles.map((profile, n) => {
        const textWrapStyle = {
            fontWeight: "bold",
            lineHeight: "24px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "102px",
            textAlign: "start",
        };

        const isCurrentProfile = currentProfile?._id === profile._id;
        const isHovering = isHover.state && isHover.profile === profile._id;

        return (
            <div
                key={n}
                style={{
                    ...createNewBtnStyle,
                    background: isCurrentProfile ? "#2A2A2A" : "",
                    border: isHovering
                        ? "solid #2A2A2A 1px"
                        : "solid #d9d9d9 1px",
                    color: isCurrentProfile ? "#fff" : "black",
                    padding: "16px",
                    cursor: "pointer",
                    transition: "background 0.1s ease-in",
                }}
                className="d-flex justify-content-start align-items-center"
                onClick={() => setCurrentProfile(profile)}
                onMouseEnter={() =>
                    setIsHover({ state: true, profile: profile._id })
                }
                onMouseLeave={() => setIsHover({ state: false, profile: null })}
            >
                <img
                    src={avatarURL ? `${avatarURL}` : `/images/no_avatar.png`}
                    style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "18px",
                        marginRight: "16px",
                    }}
                />
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="m-0" style={textWrapStyle}>
                        {profile.headline}
                    </p>
                    <p
                        className="m-0"
                        style={{
                            ...textWrapStyle,
                            fontSize: "12px",
                            color: "#5bca8d",
                        }}
                    >
                        {format(profile.createdAt)}
                    </p>
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-column">
            <div
                style={createNewBtnStyle}
                className="d-flex justify-content-center align-items-center"
                onClick={() => setCurrentProfile("create")}
            >
                <FontAwesomeIcon icon="circle-plus" style={plusIconStyle} />
                <span style={{ lineHeight: "1" }}>Tutor Profile</span>
            </div>
            {renderProfileList}
        </div>
    );
}
export default Aside;
