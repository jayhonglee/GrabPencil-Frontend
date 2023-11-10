import CircleButton from "./CircleButton/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function CircleButtonsRender({
    buttonsConfig,
    colorTheme,
    setIsLoginVisible,
    setFromState,
}) {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    const circleButtonsRender = buttonsConfig.map((button) => {
        const buttonName = button.name;
        const onClick = () => {
            if (buttonName === "about") return;
            if (!isLoggedIn) {
                setIsLoginVisible(true);
                setFromState(`${buttonName}Page`);
            }
        };

        return (
            <CircleButton
                icon={
                    <FontAwesomeIcon
                        icon={button.icon}
                        color={colorTheme.font}
                    />
                }
                link={button.link}
                colorTheme={colorTheme}
                key={button.key}
                onClick={onClick}
                buttonName={buttonName}
            />
        );
    });

    return circleButtonsRender;
}

export default CircleButtonsRender;
