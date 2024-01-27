import { useState } from "react";
import { Range } from "react-range";

const WaterRatio = () => {
  const [value, setValue] = useState([0]);

  return (
    <div>
      <h2>Today</h2>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={value}
        onChange={(e) => {
          setValue(e);
          console.log(value);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ECF2FF",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "14px",
              width: "14px",
              border: "1px solid #407BFF",
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          />
        )}
      />
    </div>
  );
};

export default WaterRatio;
