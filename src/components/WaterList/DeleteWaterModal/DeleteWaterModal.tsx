import { FC } from "react";
import { DeleteWaterModalStyled } from "../WaterList.styled";

interface IProps {
  title: string;
  show: boolean;
  handleDeleteWater: (id: string) => void;
  closeModal: () => void;
  id: string;
}

const DeleteWaterModal: FC<IProps> = ({
  handleDeleteWater,
  closeModal,
  id,
}) => {
  console.log(id);
  const handleCancel = () => {
    closeModal();
  };

  const handleDelete = () => {
    handleDeleteWater(id);

    closeModal();
  };

  return (
    <DeleteWaterModalStyled>
      <p>Are you sure you want to delete the entry?</p>
      <button className="cancel-btn" type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button className="delete-btn" type="button" onClick={handleDelete}>
        Delete
      </button>
    </DeleteWaterModalStyled>
  );
};

export default DeleteWaterModal;
