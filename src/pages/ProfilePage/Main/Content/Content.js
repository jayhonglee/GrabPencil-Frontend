import Aside from "./Aside/Aside";
import Main from "./Main/Main";

function Content({}) {
    return (
        <div className="d-flex justify-content-center">
            <Aside />
            <Main />
        </div>
    );
}

export default Content;
