import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { IWaterData } from "../WaterList";
import { SubmitHandler, useForm } from "react-hook-form";
import { addWaterThunk } from "../../../redux/water/water.operations";
import { useAppDispatch } from "../../../redux/redux_ts/hook";

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
  } = useForm<IWaterPortion>();

  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    count: 0,
    inputValue: "0",
  });

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
    <div>
      {show && (
        <div>
          <p>250 ml</p>
          <p>7:00 am</p>
        </div>
      )}
      <h2>{title}</h2>
      <p>Amount of water:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="counter">
          <button
            onClick={() => handleCountChange(state.count - 50)}
            type="button"
          >
            -
          </button>
          <span>{state.count}ml</span>
          <button
            onClick={() => handleCountChange(state.count + 50)}
            type="button"
          >
            +
          </button>
        </div>
        <label>
          <span>Recording time:</span>
          <input
            {...register("date", { required: true })}
            type="time"
            name="date"
            step={300}
          />
          {errors.date && <span>This field is required</span>}
        </label>

        <label>
          <span>Enter the value of water used:</span>
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
          />
          {errors.waterVolume && <span>This field is required</span>}
        </label>

        <div>
          <span>{state.count}ml</span>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddWaterModal;
