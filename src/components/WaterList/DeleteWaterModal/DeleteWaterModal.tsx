import { FC } from "react";
import { DeleteWaterModalStyled } from "../WaterList.styled";
import { deleteWaterThunk } from "../../../redux/water/water.operations";
import { useAppDispatch } from "../../../redux/redux_ts/hook";

interface IProps {
  title: string;
  show: boolean;
  closeModal: () => void;
  _id: string;
}

const DeleteWaterModal: FC<IProps> = ({ closeModal, _id }) => {
  const dispatch = useAppDispatch();
  const handleCancel = () => {
    closeModal();
  };

  const handleDeleteWater = (waterID: string) => {
    dispatch(deleteWaterThunk(waterID));
    closeModal();
  };

  return (
    <DeleteWaterModalStyled>
      <p className="delete-title">Are you sure you want to delete the entry?</p>
      <div className="delete-btn-box">
        <button className="cancel-btn" type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={() => handleDeleteWater(_id)}
        >
          Delete
        </button>
      </div>
    </DeleteWaterModalStyled>
  );
};

export default DeleteWaterModal;
