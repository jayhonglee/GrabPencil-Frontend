import CircleButton from "./CircleButton/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function CircleButtonsRender({ buttonsConfig, colorTheme, setIsLoginVisible }) {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    const circleButtonsRender = buttonsConfig.map((button) => {
        const onClick = () => {
            const buttonName = button.name;

            if (buttonName === "about") return;
            if (!isLoggedIn) {
                setIsLoginVisible(true);
                console.log("onclick rendered");
                return;
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
            />
        );
    });

    return circleButtonsRender;
}

export default CircleButtonsRender;
