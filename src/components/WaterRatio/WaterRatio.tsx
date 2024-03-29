import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import {
  Output,
  OutputThumb,
  PointsSpan,
  PointsThumb,
  RangeContainer,
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
import Modal from "../Modal/Modal";
import AddWaterModal from "../WaterList/AddWaterModal/AddWaterModal";
import { useWaterPercentage } from "../../hooks/useWaterPercentage";
import { useTranslation } from "react-i18next";

const WaterRatio = () => {
  const [visible, setVisible] = useState(false);
  const percentage = useWaterPercentage();

  const normalizedValue = percentage > 100 ? 100 : percentage;

  const closeModal = () => {
    setVisible(false);
  };

  const { t } = useTranslation();
  return (
    <>
      <WaterRatioContainer>
        <WaterRatioThumb>
          <RangeContainer className="third-step">
            <WaterRatioTitle>{t("homepage.h2-3Today")}</WaterRatioTitle>
            <WaterRatioRangeThumb>
              <Range
                disabled
                min={0}
                max={100}
                values={[normalizedValue]}
                onChange={() => {}}
                renderTrack={({ props, children }) => (
                  <RenderTrack
                    {...props}
                    style={{
                      ...props.style,
                      background: getTrackBackground({
                        values: [normalizedValue],
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
                      <Output>{normalizedValue}%</Output>
                    </OutputThumb>
                  </RenderThumb>
                )}
              />
            </WaterRatioRangeThumb>
            <PointsThumb>
              {normalizedValue <= 7 ? (
                <span> </span>
              ) : (
                <PointsSpan>0%</PointsSpan>
              )}
              {normalizedValue >= 85 ? (
                <span> </span>
              ) : (
                <PointsSpan>100%</PointsSpan>
              )}
            </PointsThumb>
          </RangeContainer>
          <WaterRatioBtnThumb className="hover">
            <WaterRatioBtn
              className="btn second-step"
              onClick={() => setVisible(true)}
            >
              <Icon className="water-ratio-plus" id="plus-circle" />
              {t("homepage.addWaterButton")}
            </WaterRatioBtn>
          </WaterRatioBtnThumb>
        </WaterRatioThumb>
      </WaterRatioContainer>
      {visible && (
        <Modal setVisible={setVisible} title={t("waterList.addTitle")}>
          <AddWaterModal
            title={t("waterList.addModal")}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default WaterRatio;
