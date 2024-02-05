import { useState } from "react";
import Modal from "../Modal/Modal";
import AddWaterModal from "./AddWaterModal/AddWaterModal";
import {
  selectAmountDaily,
  selectError,
  selectIsLoading,
} from "../../redux/water/waterSelectors";
import { useSelector } from "react-redux";

import WaterListItem from "./WaterListItem/WaterListItem";
import Loading from "../Loading/Loading";
import { WaterContainerStyled } from "./WaterList.styled";
import Icon from "../Icon/Icon";

export interface IWaterData {
  waterVolume: number;
  time: string;
  _id: string;
}

const WaterList = () => {
  const [visible, setVisible] = useState(false);

  const { entries } = useSelector(selectAmountDaily);

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <WaterContainerStyled>
      <h2 className="water-title">Today</h2>
      {loading && !error && <Loading />}
      {entries.length === 0 ? (
        <p className="water-empty">No notes yet</p>
      ) : (
        <ul className="water-list">
          {entries.length > 0 &&
            entries.map(({ _id, waterVolume, time }) => (
              <WaterListItem
                key={_id}
                _id={_id}
                waterVolume={waterVolume}
                time={time}
              />
            ))}
        </ul>
      )}

      <button className="add-water-btn" onClick={() => setVisible(true)}>
        <Icon className="water-plus-icon" id="plus" />
        Add water
      </button>

      {visible && (
        <Modal setVisible={setVisible} title="Add water">
          <AddWaterModal
            title="Choose a value:"
            show={false}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </WaterContainerStyled>
  );
};

export default WaterList;
