import { ChangeEvent, FC, FormEvent, KeyboardEvent, useState } from "react";
import { IWaterData } from "../WaterList";

interface Props {
  title: string;
  show: boolean;
  handleAddWater?: (event: FormEvent<HTMLFormElement>) => void;
  handleUpdateWater?: (waterData: IWaterData) => void;
  closeModal: () => void;
}

const AddWaterModal: FC<Props> = ({
  title,
  show,
  handleAddWater,
  closeModal,
}) => {
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
    handleCountChange(+state.inputValue);
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "-") {
      event.preventDefault();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleAddWater) {
      handleAddWater(event);
    }

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
      <form onSubmit={handleSubmit}>
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
          <input type="time" name="waterVolume" />
        </label>

        <label>
          <span>Enter the value of water used:</span>
          <input
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
