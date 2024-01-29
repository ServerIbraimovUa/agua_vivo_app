import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import {
  Output,
  OutputThumb,
  PointsSpan,
  PointsThumb,
  RenderThumb,
  RenderTrack,
  WaterRatioBtn,
  WaterRatioBtnThumb,
  WaterRatioContainer,
  WaterRatioRangeThumb,
  WaterRatioThumb,
  WaterRatioTitle,
} from "./WaterRatio.styled";
import Icon from "../Icon/Icon";

const WaterRatio = () => {
  const [value, setValue] = useState([67]);

  return (
    <WaterRatioContainer>
      <WaterRatioThumb>
        <div>
          <WaterRatioTitle>Today</WaterRatioTitle>
          <WaterRatioRangeThumb>
            <Range
              disabled
              min={0}
              max={100}
              values={value}
              onChange={() => {}}
              renderTrack={({ props, children }) => (
                <RenderTrack
                  {...props}
                  style={{
                    ...props.style,
                    background: getTrackBackground({
                      values: value,
                      colors: ["#9EBBFF", "#D7E3FF"],
                      min: 0,
                      max: 100,
                    }),
                  }}
                >
                  {children}
                </RenderTrack>
              )}
              renderThumb={({ props }) => (
                <RenderThumb {...props} key={props.key}>
                  <OutputThumb>
                    <Output>{value[0]}%</Output>
                  </OutputThumb>
                </RenderThumb>
              )}
            />
          </WaterRatioRangeThumb>
          <PointsThumb>
            {value[0] <= 6 ? <span> </span> : <PointsSpan>0%</PointsSpan>}
            {value[0] >= 91 ? <span> </span> : <PointsSpan>100%</PointsSpan>}
          </PointsThumb>
        </div>
        <WaterRatioBtnThumb>
          <WaterRatioBtn className="btn">
            <Icon className="water-ratio-plus" id="plus-circle" />
            Add Water
          </WaterRatioBtn>
        </WaterRatioBtnThumb>
      </WaterRatioThumb>
    </WaterRatioContainer>
  );
};

export default WaterRatio;
