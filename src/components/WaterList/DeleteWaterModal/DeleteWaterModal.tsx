import { FC } from "react";

interface IProps {
  title: string;
  //   show: boolean;
  handleDeleteWater: (waterId: number) => void;
  closeModal: () => void;
  waterId: number;
}

const DeleteWaterModal: FC<IProps> = ({
  handleDeleteWater,
  closeModal,
  waterId,
}) => {
  const handleCancel = () => {
    closeModal();
  };

  const handleDelete = () => {
    handleDeleteWater(waterId);
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
