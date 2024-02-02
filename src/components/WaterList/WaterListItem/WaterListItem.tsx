import { FC, useState } from "react";
import Icon from "../../Icon/Icon";
import Modal from "../../Modal/Modal";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import { updateWaterVolumeThunk } from "../../../redux/water/water.operations";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import { WaterItemBoxStyled } from "../WaterList.styled";
import { IUpdateWaterPayload } from "../../../redux/redux_ts/interfaces";

interface IProps {
  _id: string;
  time: string;
  waterVolume: number;
}

const WaterListItem: FC<IProps> = ({ _id, waterVolume, time }) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleUpdateWater = (waterData: IUpdateWaterPayload) => {
    dispatch(updateWaterVolumeThunk(waterData));
  };

  return (
    <WaterItemBoxStyled>
      <div className="water-info">
        <Icon className="water-glass-icon" id="water"></Icon>
        <p className="water-amount-card">{waterVolume} ml</p>
        <p className="time">{time}</p>
      </div>
      <div className="edit-delete-btn-box">
        <button
          type="button"
          className="edit-btn"
          onClick={() => setEditModalVisible(true)}
        >
          <Icon className="edit-water-icon" id="pencil"></Icon>
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => {
            setDeleteModalVisible(true);
          }}
        >
          <Icon className="delete-water-icon" id="delete"></Icon>
        </button>
      </div>
      {editModalVisible && (
        <Modal
          setVisible={setEditModalVisible}
          title="Edit the entered amount of water"
        >
          <AddWaterModal
            title="Correct entered data:"
            show={true}
            handleUpdateWater={handleUpdateWater}
            closeModal={() => {
              setEditModalVisible(false);
            }}
            id={_id}
          />
        </Modal>
      )}

      {deleteModalVisible && (
        <Modal setVisible={setDeleteModalVisible} title="Delete water">
          <DeleteWaterModal
            title="Delete entry?"
            show={false}
            closeModal={() => {
              setDeleteModalVisible(false);
            }}
            _id={_id}
          />
        </Modal>
      )}
    </WaterItemBoxStyled>
  );
};

export default WaterListItem;
