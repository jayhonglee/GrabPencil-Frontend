import portrait from "./sampleData/portrait.jpg";

function SliderItem() {
    const divStyle = {
        width: "100%",
        height: "100%",
        background: "yellow",
    };

    const profileStyle = {
        backgroundImage: `url(${portrait})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "300px",
        height: "300px",
    };

    return (
        <div style={divStyle}>
            <div style={profileStyle} />
        </div>
    );
}

export default SliderItem;
