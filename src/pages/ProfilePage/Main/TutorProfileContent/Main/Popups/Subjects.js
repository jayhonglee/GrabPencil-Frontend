import { useRef, useState } from "react";

let setIsVisibleSubjects;

function Subjects({ setValue }) {
    const [isVisible, setIsVisible] = useState(false);
    const shadeRef = useRef(null);

    setIsVisibleSubjects = (value) => {
        setIsVisible(value);
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            ref={shadeRef}
            onClick={(e) => {
                if (e.target === shadeRef.current) {
                    setIsVisible(false);
                }
            }}
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                background: "rgba(34,34,34, 0.85)",
                zIndex: "999",
                pointerEvents: isVisible ? "auto" : "none",
                opacity: isVisible ? "1" : "0",
            }}
        >
            <div
                style={{ width: "100px", height: "100px", background: "blue" }}
            ></div>
        </div>
    );
}

export { setIsVisibleSubjects };
export default Subjects;
