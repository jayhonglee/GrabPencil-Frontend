import CircleButton from "./CircleButton/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CircleButtonsRender({ buttonsConfig, colorTheme }) {
    const circleButtonsRender = buttonsConfig.map((button) => {
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
            />
        );
    });

    return circleButtonsRender;
}

export default CircleButtonsRender;
