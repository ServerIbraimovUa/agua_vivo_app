import { useState } from "react";
import Modal from "../Modal/Modal";
import AddWaterModal from "./AddWaterModal/AddWaterModal";
import {
  selectAllWater,
  selectError,
  selectIsLoading,
} from "../../redux/water/waterSelectors";
import { useSelector } from "react-redux";

import WaterListItem from "./WaterListItem/WaterListItem";
import Loading from "../Loading/Loading";
import { WaterContainerStyled } from "./WaterList.styled";
import Icon from "../Icon/Icon";
import { selectDailyNorma } from "../../redux/auth/authSelectors";

export interface IWaterData {
  waterVolume: number;
  time: string;
  _id: string;
}

const WaterList = () => {
  const [visible, setVisible] = useState(false);

  const amountDaily = useSelector(selectDailyNorma);

  const waterList = useSelector(selectAllWater);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <WaterContainerStyled>
      <h3 className="water-title">Today</h3>
      {loading && !error && <Loading />}
      {amountDaily === 0 ? (
        <p className="water-empty">No notes yet</p>
      ) : (
        <ul>
          {waterList.length > 0 &&
            waterList.map(({ _id, waterVolume }) => (
              <WaterListItem key={_id} id={_id} waterVolume={waterVolume} />
            ))}
        </ul>
      )}
      <div>
        <button className="add-water-btn" onClick={() => setVisible(true)}>
          <Icon className="water-plus-icon" id="plus"></Icon>
          Add water
        </button>
      </div>
      {visible && (
        <Modal setVisible={setVisible} title="Add water">
          <AddWaterModal
            title="Choose a value"
            show={false}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </WaterContainerStyled>
  );
};

export default WaterList;
