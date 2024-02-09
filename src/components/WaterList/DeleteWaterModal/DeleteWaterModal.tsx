import { FC } from 'react';
import { useAppDispatch } from '../../../redux/redux_ts/hook';

import { DeleteWaterModalStyled } from '../WaterList.styled';
import { deleteWaterThunk } from '../../../redux/water/water.operations';

import { useTranslation } from 'react-i18next';
import { removeScrollLock } from '../../Modal/services/services';

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
    removeScrollLock();
  };

  const handleDeleteWater = (waterID: string) => {
    dispatch(deleteWaterThunk(waterID));
    closeModal();
  };

  const { t } = useTranslation();
  return (
    <DeleteWaterModalStyled>
      <p className="delete-title">{t('deleteModal.sure')}</p>
      <div className="delete-btn-box">
        <button className="cancel-btn" type="button" onClick={handleCancel}>
          {t('deleteModal.cancel')}
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={() => {
            removeScrollLock();
            handleDeleteWater(_id);
          }}
        >
          {t('deleteModal.delete')}
        </button>
      </div>
    </DeleteWaterModalStyled>
  );
};

export default DeleteWaterModal;
