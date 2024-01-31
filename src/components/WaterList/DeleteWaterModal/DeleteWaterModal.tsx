import { FC } from "react";

interface IProps {
  //   title: string;
  //   show: boolean;
  handleDeleteWater: (id: string) => void;
  closeModal: () => void;
  id: string;
}

const DeleteWaterModal: FC<IProps> = ({
  handleDeleteWater,
  closeModal,
  id,
}) => {
  const handleCancel = () => {
    closeModal();
  };

  const handleDelete = () => {
    handleDeleteWater(id);
    closeModal();
  };

  return (
    <div>
      <p>Are you sure you want to delete the entry?</p>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" onClick={handleDelete}>
        Save
      </button>
    </div>
  );
};

export default DeleteWaterModal;
