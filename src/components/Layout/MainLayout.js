import LoginPopUp from "./LoginPopUp/LoginPopUp";

function MainLayout({ header, content, footer }) {
    return (
        <div className="text-center container-fluid">
            <div className="row">{header}</div>
            <div className="row">{content}</div>
            <div className="row">{footer}</div>
            {/* {isPopupOpen ? ( */}
            {/* <LoginPopUp /> */}
            {/* ) : (
                ""
            )} */}
        </div>
    );
}

export default MainLayout;
