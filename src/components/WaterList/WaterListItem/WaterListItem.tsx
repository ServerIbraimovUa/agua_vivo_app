import { FC, useState } from "react";
import { useAppDispatch } from "../../../redux/redux_ts/hook";

import { updateWaterVolumeThunk } from "../../../redux/water/water.operations";
import { WaterItemBoxStyled } from "../WaterList.styled";
import { IUpdateWaterPayload } from "../../../redux/redux_ts/interfaces";

import Icon from "../../Icon/Icon";
import Modal from "../../Modal/Modal";

import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import EditWaterModal from "../EditWaterModal/EditWaterModal";
import { useTranslation } from "react-i18next";


interface IProps {
  _id: string;
  time: string;
  waterVolume: number;
}

const WaterListItem: FC<IProps> = ({ _id, waterVolume, time }) => {
  const { t } = useTranslation();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const dispatch = useAppDispatch();

  const handleUpdateWater = (waterData: IUpdateWaterPayload) => {
    dispatch(updateWaterVolumeThunk(waterData));
  };


  const waterIcon = (volume: number) => {
    if (volume >= 1500) {
      return <Icon className="water-bottle-icon" id="barrel" />;
    } else if (volume >= 500) {
      return <Icon className="water-bottle-icon" id="bottle" />;
    } else {
      return <Icon className="water-glass-icon" id="water" />;
    }
  };


  return (
    <WaterItemBoxStyled>
      <div className="water-info">
        {waterIcon(waterVolume)}
        <p className="water-amount-card">
          {waterVolume} {t("addWater.ml")}
        </p>
        <p className="time">{time}</p>
      </div>
      <div className="edit-delete-btn-box">
        <button
          type="button"
          className="edit-btn"
          onClick={() => setEditModalVisible(true)}
        >
          <Icon className="edit-water-icon" id="pencil" />
        </button>
        <button
          type="button"
          className="delete-btn-card"
          onClick={() => {
            setDeleteModalVisible(true);
          }}
        >
          <Icon className="delete-water-icon" id="delete" />
        </button>
      </div>
      {editModalVisible && (
        <Modal
          setVisible={setEditModalVisible}
          title={t("waterList.editTitle")}
        >
          <EditWaterModal
            title={t("waterList.editModal")}
            handleUpdateWater={handleUpdateWater}
            closeModal={() => {
              setEditModalVisible(false);
            }}
            id={_id}
          />
        </Modal>
      )}
      {deleteModalVisible && (
        <Modal
          setVisible={setDeleteModalVisible}
          title={t("waterList.deleteTitle")}
          delete={true}
        >
          <DeleteWaterModal
            title={t("waterList.deleteModal")}
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
