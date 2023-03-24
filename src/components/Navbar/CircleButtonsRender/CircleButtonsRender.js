import useFetch from "hooks/useFetch";
import useFetchColorTheme from "hooks/useFetchColorTheme";
import CircleButton from "./CircleButton/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CircleButtonsRender() {
    const fetchNavbar = useFetch("navbar");
    const fetchColorTheme = useFetchColorTheme("lightMode");
    const buttonsConfig = fetchNavbar[1].buttons;

    const circleButtonsRender = buttonsConfig.map((button) => {
        return (
            <CircleButton
                icon={
                    <FontAwesomeIcon
                        icon={button.icon}
                        color={fetchColorTheme.font}
                    />
                }
                link={button.link}
                key={button.key}
            />
        );
    });

    return circleButtonsRender;
}

export default CircleButtonsRender;
