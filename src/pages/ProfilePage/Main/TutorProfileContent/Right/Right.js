function Right({ avatarURL, userName }) {
    const wrapperStyle = {
        width: "264px",
    };

    const profileCard = {
        width: "100%",
        height: "310px",
        borderRadius: "40px",
        border: "solid #d9d9d9 1px",
        padding: "40px",
    };

    return (
        <div style={wrapperStyle}>
            <div style={profileCard}>
                <img
                    src={avatarURL ? `${avatarURL}` : `/images/no_avatar.png`}
                    style={{
                        width: "140px",
                        height: "140px",
                        borderRadius: "48px",
                    }}
                />
                <div
                    style={{
                        marginTop: "16px",
                        fontSize: "24px",
                        fontWeight: "800",
                        lineHeight: "32px",
                    }}
                >
                    {userName}
                </div>
            </div>
        </div>
    );
}

export default Right;
