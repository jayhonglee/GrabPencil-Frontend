import SliderItem from "./SliderItem/SliderItem";
import MainItem from "./MainItem/MainItem";
import Pagination from "./Pagination/Pagination";

function Results() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="p-0 col-5" style={{ background: "" }}>
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <Pagination />
                </div>
                <div className="col-7" style={{ background: "" }}>
                    <MainItem />
                </div>
            </div>
        </div>
    );
}

export default Results;
