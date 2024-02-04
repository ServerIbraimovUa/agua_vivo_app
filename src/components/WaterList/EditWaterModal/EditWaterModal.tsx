import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { generateTimeOptions } from "../utils/utils";
import { useSelector } from "react-redux";

import Icon from "../../Icon/Icon";

import { AddWaterModalStyled } from "../WaterList.styled";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import { updateWaterVolumeThunk } from "../../../redux/water/water.operations";
import { selectAmountDaily } from "../../../redux/water/waterSelectors";
import { IUpdateWaterPayload } from "../../../redux/redux_ts/interfaces";
import Popover from "../../DailyNorma/Popover";

interface IProps {
  id?: string;
  title: string;
  handleUpdateWater?: (waterData: IUpdateWaterPayload) => void;
  closeModal: () => void;
}

export type IWaterPortion = {
  time: string;
  waterVolume: number;
};

const EditWaterModal: FC<IProps> = ({ title, closeModal, id }) => {
  const {
    register,
    handleSubmit,
    // watch,
    getValues,
    formState: { errors },
  } = useForm<IWaterPortion>({ mode: "onChange" });

  const dispatch = useAppDispatch();
  const { entries } = useSelector(selectAmountDaily);
  const water = entries.find((entry) => entry._id === id);

  const [state, setState] = useState({
    count: water ? water.waterVolume : 0,
    inputValue: water ? water.waterVolume : "0",
  });

  const timeOptions = generateTimeOptions();

  const amountWater = state.inputValue;
  const waterVolume = getValues("waterVolume");

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
    if (errors.waterVolume) {
      return;
    }

    if (newData.waterVolume === 0) {
      return;
    }
    message = createPopoverMessage(waterVolume);

    if (id) {
      dispatch(updateWaterVolumeThunk({ ...newData, id }));
    }

    closeModal();
  };

  let visible = false;
  const createPopoverMessage = (w: number): string | undefined => {
    if (w === 0) {
      visible = true;
      return "The amount of water cannot be 0!";
    }
  };

  let message = createPopoverMessage(Number(amountWater));

  return (
    <AddWaterModalStyled>
      <div className="water-card">
        <Icon className="water-glass-icon" id="water" />
        <p className="water-amount-card">{water?.waterVolume} ml</p>
        <p className="time">{water?.time}</p>
      </div>

      <h2 className="add-water-title">{title}</h2>
      <div className="counter-box">
        <p className="">Amount of water:</p>
        <div className="counter-btn-box">
          <button
            className="counter-btn"
            onClick={() => handleCountChange(state.count - 50)}
            type="button"
          >
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
          {visible && <Popover message={message} />}
          <select
            {...register("time", { required: true })}
            name="time"
            className="water-select"
            aria-label="Time"
          >
            {timeOptions.map((option) => (
              <option
                key={option}
                value={option}
                selected={option === water?.time}
              >
                {option}
              </option>
            ))}
          </select>
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
            className="water-select"
          />
        </label>
        <div className="btn-container">
          <span className="water-amount">{water?.waterVolume}ml</span>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </AddWaterModalStyled>
  );
};

export default EditWaterModal;
