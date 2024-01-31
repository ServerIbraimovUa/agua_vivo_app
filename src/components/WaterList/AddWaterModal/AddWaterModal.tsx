import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { IWaterData } from "../WaterList";
import { SubmitHandler, useForm } from "react-hook-form";
import { addWaterThunk } from "../../../redux/water/water.operations";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import { AddWaterModalStyled } from "../WaterList.styled";
import Icon from "../../Icon/Icon";
// import TimePicker from "react-time-picker";
// import type { Detail, LooseValue } from "./shared/types.js";

///
// type Detail = "hour" | "minute" | "second";
// type LooseValuePiece = string | Date | null;
// type LooseValue = LooseValuePiece | Range<LooseValuePiece>;

interface IProps {
  title: string;
  show: boolean;
  handleUpdateWater?: (waterData: IWaterData) => void;
  closeModal: () => void;
}

export type IWaterPortion = {
  date: string;
  waterVolume: number;
};

const AddWaterModal: FC<IProps> = ({
  title,
  show,

  closeModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWaterPortion>({
    defaultValues: {
      date: `${new Date().getHours()}:${new Date().getMinutes()}`,
    },
  });

  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    count: 0,
    inputValue: "0",
  });
  // const [value, setValue] = useState<LooseValue>(getHoursMinutesSeconds(now));

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
      date: data.date,
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
          {/* <input aria-label="Time" type="time" /> */}
          <input
            {...register("date", { required: true })}
            type="time"
            name="date"
            step={300}
            className="water-input"
            aria-label="Time"
          />
          {/* <TimePicker onChange={onChange} value={value} /> */}
          {errors.date && <span>This field is required</span>}
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
