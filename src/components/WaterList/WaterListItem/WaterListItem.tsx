import { FC, useState } from "react";
import Icon from "../../Icon/Icon";
import Modal from "../../Modal/Modal";
import AddWaterModal from "../AddWaterModal/AddWaterModal";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import { updateWaterVolumeThunk } from "../../../redux/water/water.operations";
import { useAppDispatch } from "../../../redux/redux_ts/hook";
import { WaterItemBoxStyled } from "../WaterList.styled";
import { IWaterPayload } from "../../../redux/redux_ts/interfaces";

interface IProps {
  id: string;
  waterVolume: number;
}

const WaterListItem: FC<IProps> = ({ id, waterVolume }) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  const handleUpdateWater = (waterData: IWaterPayload) => {
    dispatch(updateWaterVolumeThunk(waterData));
  };

  return (
    <WaterItemBoxStyled>
      <Icon className="water-glass-icon" id="water"></Icon>
      <p>{waterVolume}</p>

      <button
        type="button"
        className="edit-btn"
        onClick={() => setEditModalVisible(true)}
      >
        <Icon className="edit-water-icon" id="pencil"></Icon>
      </button>
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
          />
        </Modal>
      )}
      <button
        type="button"
        className="delete-btn"
        onClick={() => {
          setDeleteModalVisible(true);
        }}
      >
        <Icon className="delete-water-icon" id="delete"></Icon>
      </button>
      {deleteModalVisible && (
        <Modal setVisible={setDeleteModalVisible} title="Delete water">
          <DeleteWaterModal
            title="Delete entry?"
            show={false}
            closeModal={() => {
              setDeleteModalVisible(false);
            }}
            id={id}
          />
        </Modal>
      )}
    </WaterItemBoxStyled>
  );
};

export default WaterListItem;
