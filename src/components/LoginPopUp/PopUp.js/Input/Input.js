export default function Input({
    value,
    setValue,
    isFocus,
    setIsFocus,
    text,
    password,
    isRequired,
}) {
    const inputStyle = {
        width: "100%",
        height: "57px",
        background: "rgb(247,247,247)",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
        borderBottom: "none",
        borderLeft: isRequired ? "2px solid red" : "none",
        outline: "none",
        padding: "18px",
        borderRadius: "5px",
        fontSize: "15px",
        fontWeight: "600",
        transition: "borderLeft 0.3s",
    };

    return (
        <div style={{ position: "relative" }}>
            <input
                style={inputStyle}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id={`${text}Input`}
                type={password && "password"}
            />
            <label
                style={{
                    position: "absolute",
                    left: "18px",
                    top: "50%",
                    transform: isFocus
                        ? "translateY(-100%)"
                        : "translateY(-50%)",
                    color: "#999",
                    fontWeight: "600",
                    transition: "all 0.3s",
                    opacity: isFocus || value ? 0 : 1,
                    userSelect: "none",
                }}
                htmlFor={`${text}Input`}
            >
                {text}
            </label>
            <label
                style={{
                    position: "absolute",
                    left: "0",
                    transform: isFocus
                        ? "translateY(-100%)"
                        : "translateY(-80%)",
                    fontSize: "14px",
                    color: "#999",
                    fontWeight: "500",
                    transition: "all 0.3s",
                    opacity: isFocus ? 1 : 0,
                    userSelect: "none",
                }}
            >
                {text}
            </label>
        </div>
    );
}
