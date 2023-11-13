import { useState, useRef, useEffect } from "react";
import "./Navigation.css";

function Navigation({}) {
    const navigationList = ["My Tutor Profiles", "My Account"];
    const useref = useRef;
    const buttonRefs = navigationList.map(() => useref(null));
    const [currentButton, setCurrentButton] = useState("My Tutor Profiles");
    const [buttonWidths, setButtonWidths] = useState([]);
    const [underlineLeft, setUnderlineLeft] = useState(0);

    useEffect(() => {
        const widths = buttonRefs.map((ref) => {
            return ref.current.offsetWidth;
        });
        setButtonWidths(widths);
    }, []);

    const navigationStyle = {
        height: "57px",
        backgroundColor: "#35b234",
    };

    const navigationInnerDiv = {
        width: "70%",
        position: "relative",
    };

    const handleButtonClick = (buttonType) => {
        setCurrentButton(buttonType);
        let leftValue = 0;
        for (let i = 0; i < navigationList.indexOf(buttonType); ++i) {
            leftValue = buttonWidths[i] + 40;
        }
        setUnderlineLeft(leftValue);
    };

    const underlineStyle = {
        position: "absolute",
        left: `${underlineLeft}px`,
        bottom: "0",
        width: buttonWidths[navigationList.indexOf(currentButton)] || 0,
        height: "5px",
        backgroundColor: "white",
        transition: "all 0.3s ease",
        borderRadius: "5px",
    };

    const navigationButtonRender = navigationList.map((btn, n) => {
        const buttonStyle = {
            fontSize: "14px",
            color: currentButton === btn ? "#fff" : "#aee0ae",
            height: "100%",
            fontWeight: "700",
            marginRight: "40px",
        };

        return (
            <div
                ref={buttonRefs[n]}
                className="d-flex justify-content-center align-items-center cursor-pointer"
                style={buttonStyle}
                onClick={() => handleButtonClick(btn)}
                key={n}
            >
                {btn}
            </div>
        );
    });

    return (
        <div
            className="d-flex justify-content-center p-0"
            style={navigationStyle}
        >
            <div className="d-flex p-0" style={navigationInnerDiv}>
                {navigationButtonRender}
                <div style={underlineStyle} />
            </div>
        </div>
    );
}

export default Navigation;
