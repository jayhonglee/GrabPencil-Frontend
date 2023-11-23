import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

function Info({ currentProfile, label, content, popup, setPopup }) {
    const [isHover, setIsHover] = useState(false);
    const [iconOffset, setIconOffset] = useState(0);
    const parentRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
        if (parentRef.current && iconRef.current) {
            const parentRect = parentRef.current.getBoundingClientRect();
            const iconRect = iconRef.current.getBoundingClientRect();

            const offset = iconRect.left - parentRect.left;
            setIconOffset(offset);
        }
    }, [label, content]);

    const div = {
        width: "100%",
        marginBottom: "32px",
    };

    const labelStyle = {
        fontWeight: "bold",
        color: "#35b234",
        marginBottom: "8px",
        position: "relative",
    };

    const icon = {
        color: "#2a2a2a",
        marginLeft: "8px",
        position: "absolute",
        bottom: "20%",
        transform: `${isHover ? "translateX(13px)" : ""}`,
        transition: "transform 0.3s ease-in-out",
    };

    const contentStyle = {
        width: "100%",
        borderRadius: "32px",
        border: isHover ? "solid #2a2a2a 1px" : "solid #d9d9d9 1px",
        padding: "24px",
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: isHover ? "#ebf7eb" : "#fff",
        cursor: "pointer",
    };

    const wrapTextStyle = {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    };

    const isContentArray = Array.isArray(content) && content.length > 0;

    const renderContent = isContentArray ? (
        content.map((item, n) => {
            const itemStyle = {
                ...wrapTextStyle,
                padding: "8px 24px",
                lineHeight: "16px",
                fontSize: "12px",
                borderRadius: "40px",
                backgroundColor: isHover ? "#fff" : "#ebf7eb",
                margin: "5px",
            };

            return (
                <div style={itemStyle} key={n}>
                    {item}
                </div>
            );
        })
    ) : currentProfile === "create" && !content ? (
        <div
            style={{
                ...wrapTextStyle,
                fontSize: "14px",
                fontWeight: "normal",
                color: "grey",
            }}
        >
            Add {label}
        </div>
    ) : (
        <div style={wrapTextStyle}>{content}</div>
    );

    return (currentProfile !== "create" &&
        (!content || content.length === 0)) ||
        (currentProfile === "create" &&
            (label === "First name" ||
                label === "Last name" ||
                label === "Gender")) ? (
        ""
    ) : (
        <div style={div}>
            <div className="text-start" style={labelStyle} ref={parentRef}>
                <span>{label}</span>
                <FontAwesomeIcon icon="pen" style={icon} ref={iconRef} />
                <div
                    style={{
                        width: isHover ? "11px" : "0px",
                        height: "2px",
                        background: "#2a2a2a",
                        position: "absolute",
                        bottom: "20%",
                        left: `${iconOffset}px`,
                        transition: "width 0.3s ease-in-out",
                    }}
                />
            </div>
            <div
                className="text-start d-flex flex-wrap"
                style={contentStyle}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => {
                    if (setPopup) setPopup(true);
                }}
            >
                {renderContent}
            </div>
            {popup}
        </div>
    );
}

export default Info;
