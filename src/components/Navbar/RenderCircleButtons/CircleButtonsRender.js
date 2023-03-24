import useFetch from "hooks/useFetch";
import CircleButton from "./CircleButton/CircleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CircleButtonsRender() {
    const fetchNavbar = useFetch("navbar");
    const buttonsConfig = fetchNavbar[1].buttons;

    const circleButtonsRender = buttonsConfig.map((button) => {
        return (
            <CircleButton
                icon={
                    <FontAwesomeIcon icon={button.icon} color={button.color} />
                }
                link={button.link}
                key={button.key}
            />
        );
    });

    return circleButtonsRender;
}

export default CircleButtonsRender;
