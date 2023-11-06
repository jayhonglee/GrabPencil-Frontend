import CardLoading from "./CardLoading/CardLoading";
import MainItemLoading from "./MainItemLoading/MainItemLoading";

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
                    <MainItemLoading />
                </div>
            </div>
        </div>
    );
}

export default ResultsLoading;
