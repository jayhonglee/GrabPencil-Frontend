import "./ChatOnline.css";

export default function ChatOnline({
    currentChat,
    allMembersAvatarURLs,
    allMembersNames,
}) {
    return (
        <div className="chatOnline">
            {currentChat?.members?.map((m, n) => {
                const member = allMembersNames?.filter(
                    (member) => member?.user?._id === m
                )[0];
                const memberOnline = member?.online;
                const memberFirstName = member?.user?.firstName;
                const memberLastName = member?.user?.lastName;

                return (
                    <div className="chatOnlineFriend" key={n}>
                        <div className="chatOnlineImgContainer">
                            <img
                                className="chatOnlineImg"
                                src={
                                    allMembersAvatarURLs?.[m]
                                        ? `${allMembersAvatarURLs[m]}`
                                        : `/images/no_avatar.png`
                                }
                                alt=""
                            />
                            <div
                                className={
                                    memberOnline
                                        ? "chatOnlineBadgeOutOnline"
                                        : "chatOnlineBadgeOutOffline"
                                }
                            >
                                <div
                                    className={
                                        memberOnline
                                            ? "chatOnlineBadgeInOnline"
                                            : "chatOnlineBadgeInOffline"
                                    }
                                />
                            </div>
                        </div>
                        <span className="chatOnlineName">
                            {memberFirstName} {memberLastName}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
