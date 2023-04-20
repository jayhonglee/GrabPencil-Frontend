import SliderItem from "./SliderItem/SliderItem";

function Results() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{ background: "red" }}>
                    <SliderItem />
                </div>
                <div className="col-7" style={{ background: "blue" }}>
                    bye
                </div>
            </div>
        </div>
    );
}

export default Results;
