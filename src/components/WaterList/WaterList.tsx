import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import AddWaterModal from "./AddWaterModal/AddWaterModal";
import {
  selectAllWater,
  // selectDailyNorma,
  selectError,
  selectIsLoading,
} from "../../redux/water/waterSelectors";
import { useSelector } from "react-redux";
import {
  deleteWater,
  getAmountDaily,
  updateWaterVolume,
} from "../../redux/water/water.operations";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import WaterListItem from "./WaterListItem/WaterListItem";
import Loading from "../Loading/Loading";
import { WaterContainerStyled } from "./WaterList.styled";
import Icon from "../Icon/Icon";

// export interface INewPortion {
//   waterVolume: string;
//   date: string;
// }

export interface IWaterData {
  waterList: {
    waterVolume: number;
    date: number;
    waterId: number;
  };
}

const WaterList = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useAppDispatch();

  // const amountDaily = useSelector(selectDailyNorma);
  // console.log(amountDaily);

  const waterList = useSelector(selectAllWater);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAmountDaily());
  }, [dispatch]);

  const handleDeleteWater = (waterID: number) => {
    dispatch(deleteWater(waterID));
  };

  const handleUpdateWater = (waterData: IWaterData) => {
    dispatch(updateWaterVolume(waterData));
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <WaterContainerStyled>
      <h1 className="water-title">Today</h1>
      {loading && !error && <Loading />}
      {waterList.length === 0 ? (
        <p className="water-empty">No notes yet</p>
      ) : (
        <WaterListItem
          show={false}
          closeModal={closeModal}
          handleDeleteWater={handleDeleteWater}
          handleUpdateWater={handleUpdateWater}
          waterList={waterList}
        />
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
