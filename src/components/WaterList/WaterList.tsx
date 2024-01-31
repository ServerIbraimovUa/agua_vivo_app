import { useState } from "react";
import Modal from "../Modal/Modal";
import AddWaterModal from "./AddWaterModal/AddWaterModal";
import { selectAllWater } from "../../redux/water/waterSelectors";
import { useSelector } from "react-redux";
import {
  deleteWaterThunk,
  updateWaterVolumeThunk,
} from "../../redux/water/water.operations";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import WaterListItem from "./WaterListItem/WaterListItem";

// export interface INewPortion {
//   waterVolume: string;
//   date: string;
// }

export interface IWaterData {
  waterVolume: number;
  time: string;
  id: string;
}

const WaterList = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const waterList = useSelector(selectAllWater);

  const handleDeleteWater = (waterID: string) => {
    dispatch(deleteWaterThunk(waterID));
  };

  const handleUpdateWater = (waterData: IWaterData) => {
    dispatch(updateWaterVolumeThunk(waterData));
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div>
      <h1>Today</h1>

      {waterList.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        <WaterListItem
          show={false}
          closeModal={closeModal}
          handleDeleteWater={handleDeleteWater}
          handleUpdateWater={handleUpdateWater}
        />
      )}
      <div>
        <button onClick={() => setVisible(true)}>Add water</button>
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
    </div>
  );
};

export default WaterList;
