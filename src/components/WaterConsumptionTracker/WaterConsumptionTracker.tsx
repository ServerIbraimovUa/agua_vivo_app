import { FC } from "react";
import { Div, Ul } from "./WaterConsumptionTrackerStyled.styled";
import Icon from "../Icon/Icon";
interface IComponent {
  handleClick: () => void;
}
const WaterConsumptionTracker: FC<IComponent> = ({ handleClick }) => {
  return (
    <Div>
      <h1 className="title">Water consumption tracker</h1>
      <h2>Record daily water intake and track</h2>
      <div>
        <h3>Tracker Benefits</h3>
        <Ul>
          <li>
            <Icon className="welcome-icon" id="calendar" />
            <p>Habit drive</p>
          </li>
          <li>
            <Icon className="welcome-icon" id="bar" />
            <p>View statistics</p>
          </li>
          <li>
            <Icon className="welcome-icon" id="tools" />
            <p>Personal rate setting</p>
          </li>
        </Ul>
      </div>
      <button className="btn" onClick={handleClick} type="button">
        Try tracker
      </button>
    </Div>
  );
};

export default WaterConsumptionTracker;
