import { IWaterData } from "../WaterList";
import { FC, useState } from "react";
import Icon from "../../Icon/Icon";
import Modal from "../../Modal/Modal";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import {
  deleteWaterThunk,
  updateWaterVolumeThunk,
} from "../../../redux/water/water.operations";
import { useAppDispatch } from "../../../redux/redux_ts/hook";

interface IProps {
  show: boolean;
  closeModal: () => void;

  waterItem: IWaterData;
}

const WaterListItem: FC<IProps> = ({ closeModal, waterItem }) => {
  const [visible, setVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  const handleUpdateWater = (waterData: IWaterData) => {
    dispatch(updateWaterVolumeThunk(waterData));
  };

  const handleDeleteWater = (waterID: string) => {
    dispatch(deleteWaterThunk(waterID));
  };

  return (
    <>
      <li key={waterItem.id} id={waterItem.id}>
        <span>
          <Icon className="water-glass-icon" id="water"></Icon>
        </span>
        <p>{waterItem.waterVolume}</p>

        <button
          type="button"
          className="edit-btn"
          onClick={() => {
            setVisible(true);
            setEditModalVisible(true);
          }}
        >
          <Icon className="edit-water-icon" id="pencil"></Icon>
        </button>
        {visible && editModalVisible && (
          <Modal
            setVisible={setVisible}
            title="Edit the entered amount of water"
          >
            <AddWaterModal
              title="Choose a value"
              show={false}
              handleUpdateWater={handleUpdateWater}
              closeModal={() => {
                setEditModalVisible(false);
                setVisible(false);
                closeModal();
              }}
            />
          </Modal>
        )}
        <button
          type="button"
          className="delete-btn"
          onClick={() => {
            setVisible(true);
            setDeleteModalVisible(true);
          }}
        >
          <Icon className="delete-water-icon" id="delete"></Icon>
        </button>
        {visible && deleteModalVisible && (
          <Modal setVisible={setVisible} title="Delete water">
            <DeleteWaterModal
              title="Delete entry?"
              show={false}
              closeModal={() => {
                setDeleteModalVisible(false);
                setVisible(false);
                closeModal();
              }}
              handleDeleteWater={handleDeleteWater}
              id={waterItem.id}
            />
          </Modal>
        )}
      </li>
    </>
  );
};

export default WaterListItem;
