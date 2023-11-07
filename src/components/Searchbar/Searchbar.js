import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Searchbar({ colorTheme, label, placeholder, icon, name, onChange }) {
    const searchBar = {
        border: `1px solid ${colorTheme.font}`,
        borderRadius: "0.5rem",
        alignItems: "center",
        background: colorTheme.primary,
        height: "100%",
    };

    const input = {
        border: "none",
        outline: "none",
        background: "none",
    };

    const labelStyle = {
        fontWeight: "600",
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (label == "What") onChange.setCurrentWhatParam(inputValue);

        if (label == "Where") onChange.setCurrentWhereParam(inputValue);
    };

    return (
        <div className="d-flex container-fluid p-3" style={searchBar}>
            <div>
                <label htmlFor={name} style={labelStyle}>
                    {label}
                </label>
            </div>
            <div className="flex-grow-1 d-flex">
                <input
                    className="container-fluid"
                    placeholder={placeholder}
                    id={name}
                    style={input}
                    onChange={handleInputChange}
                />
                <span>
                    <FontAwesomeIcon icon={icon} color={colorTheme.font} />
                </span>
            </div>
        </div>
    );
}

export default Searchbar;
