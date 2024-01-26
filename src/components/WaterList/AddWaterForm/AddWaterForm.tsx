import { FC, useState } from "react";

interface CounterState {
  count: number;
}

const AddWaterForm: FC = () => {
  const [state, setState] = useState<CounterState>({ count: 0 });
  //   const [inputValue, setInputValue] = useState<string>("");

  const decrement = () => {
    if (state.count - 50 >= 0) {
      setState({ count: state.count - 50 });
    }
  };

  const increment = () => {
    if (state.count + 50 <= 5000) setState({ count: state.count + 50 });
  };

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setInputValue(e.target.value);
  //     setState({ count: state.count });
  //   };

  //   const handleInputBlur = () => {
  //     if (!inputValue) {
  //       setInputValue(`${state.count}`);
  //     }
  //   };

  return (
    <div>
      <form>
        <h2>Choose a value:</h2>
        <p>Amount of water:</p>
        <div className="counter">
          <button onClick={decrement} type="button">
            -
          </button>
          <span>{state.count}ml</span>
          <button onClick={increment} type="button">
            +
          </button>
        </div>
        <label>
          <p>Recording time:</p>
          <input
            type="time"
            // value={inputValue}
            // onChange={handleInputChange}
            // onBlur={handleInputBlur}
          />
        </label>
        <label>
          <h2>Enter the value of the water used:</h2>
          <input type="text" />
        </label>
        <div>
          <span>{state.count}ml</span>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddWaterForm;
