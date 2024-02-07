import { FC } from "react";
import { Div, Ul } from "./WaterConsumptionTrackerStyled.styled";
import Icon from "../Icon/Icon";
import { useTranslation } from "react-i18next";

interface IComponent {
  handleClick: () => void;
}
const WaterConsumptionTracker: FC<IComponent> = ({ handleClick }) => {
  const { t } = useTranslation();
  return (
    <Div>
      <h1 className="title">{t("welcome.title")}</h1>
      <h2>{t("welcome.subtitle")}</h2>
      <div className="tracker">
        <h3>{t("welcome.subtitle3")}</h3>
        <Ul>
          <li>
            <Icon className="welcome-icon" id="calendar" />
            <p>{t("welcome.trackerLi1")}</p>
          </li>
          <li>
            <Icon className="welcome-icon" id="bar" />
            <p>{t("welcome.trackerLi2")}</p>
          </li>
          <li>
            <Icon className="welcome-icon" id="tools" />
            <p>{t("welcome.trackerLi3")}</p>
          </li>
        </Ul>
      </div>
      <button className="btn" onClick={handleClick} type="button">
        {t("welcome.button")}
      </button>
    </Div>
  );
};

export default WaterConsumptionTracker;
