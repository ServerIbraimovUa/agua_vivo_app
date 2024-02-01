import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import { IWaterData } from "../WaterList";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import { AddWaterModalStyled } from "../WaterList.styled";
import Icon from "../../Icon/Icon";
import { addWaterThunk } from "../../../redux/water/water.operations";

interface IProps {
  title: string;
  show: boolean;
  handleUpdateWater?: (waterData: IWaterData) => void;
  closeModal: () => void;
}

export type IWaterPortion = {
  time: string;
  waterVolume: number;
};

const AddWaterModal: FC<IProps> = ({ title, show, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWaterPortion>();

  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    count: 0,
    inputValue: "0",
  });
  const [timeOptions, setTimeOptions] = useState<string[]>([]);

  useEffect(() => {
    const now = new Date();
    const minutes = now.getMinutes();
    const amPM = now.getHours() >= 12 ? "PM" : "AM";
    const formattedHours = (now.getHours() % 12 || 12)
      .toString()
      .padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const currentTime = `${formattedHours}:${formattedMinutes} ${amPM}`;

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    let nextIntervalHour = currentHour;
    let nextIntervalMinute = Math.ceil(currentMinute / 5) * 5;
    if (nextIntervalMinute >= 60) {
      nextIntervalHour++;
      nextIntervalMinute -= 60;
    }

    const intervals: string[] = [];
    for (
      let i = nextIntervalHour * 60 + nextIntervalMinute;
      i < 24 * 60;
      i += 5
    ) {
      const minutes = (i % 60).toString().padStart(2, "0");
      const amPM = Math.floor(i / 60) < 12 ? "AM" : "PM";
      const formattedHours = (Math.floor(i / 60) % 12 || 12)
        .toString()
        .padStart(2, "0");
      intervals.push(`${formattedHours}:${minutes} ${amPM}`);
    }

    setTimeOptions([currentTime, ...intervals]);
  }, []);

  const handleCountChange = (newCount: number) => {
    if (state.count + newCount >= 0) {
      setState({
        inputValue: String(newCount),
        count: newCount,
      });
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setState((prevState) => ({
      ...prevState,
      inputValue: value,
    }));
  };

  const handleInputBlur = () => {
    handleCountChange(Number(state.inputValue));
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "-") {
      event.preventDefault();
    }
  };

  const onSubmit: SubmitHandler<IWaterPortion> = (data) => {
    const newData = {
      time: data.time,
      waterVolume: Number(state.inputValue),
    };

    dispatch(addWaterThunk(newData));

    closeModal();
  };

  return (
    <AddWaterModalStyled>
      {show && (
        <div>
          <p>250 ml</p>
          <p>7:00 am</p>
        </div>
      )}
      <h2 className="add-water-title">{title}</h2>
      <div className="counter-box">
        <p className="">Amount of water:</p>
        <div className="counter-btn-box">
          <button
            className="counter-btn"
            onClick={() => handleCountChange(state.count - 50)}
            type="button"
          >
            {" "}
            <Icon className="icon-minus" id="minus" />
          </button>
          <span className="water-amount-span">{state.count}ml</span>
          <button
            className="counter-btn"
            onClick={() => handleCountChange(state.count + 50)}
            type="button"
          >
            <Icon className="icon-plus" id="plus"></Icon>
          </button>
        </div>
      </div>
      <form className="add-water-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="water-label">
          <span>Recording time:</span>
          <select
            {...register("time", { required: true })}
            name="time"
            className="water-input"
            aria-label="Time"
          >
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.time && <span>This field is required</span>}
        </label>

        <label className="water-label">
          <span className="enter-water-span">
            Enter the value of water used:
          </span>
          <input
            {...register("waterVolume", { required: true })}
            type="number"
            min={0}
            max={5000}
            step={50}
            name="waterVolume"
            value={state.inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleInputKeyPress}
            className="water-input"
          />
          {errors.waterVolume && <span>This field is required</span>}
        </label>

        <div className="btn-container">
          <span className="water-amount">{state.count}ml</span>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </AddWaterModalStyled>
  );
};

export default AddWaterModal;
