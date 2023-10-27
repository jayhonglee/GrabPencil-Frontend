import MainItem from "../Results/MainItem/MainItem";
import CardLoading from "./CardLoading/CardLoading";

function ResultsLoading() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="p-0 col-5">
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                </div>
                <div className="col-7">
                    <MainItem />
                </div>
            </div>
        </div>
    );
}

export default ResultsLoading;
