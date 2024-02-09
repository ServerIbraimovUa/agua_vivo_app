import { useSelector } from 'react-redux';
import { useState } from 'react';

import {
  selectAmountDaily,
  selectError,
  selectIsLoading,
} from '../../redux/water/waterSelectors';

import AddWaterModal from './AddWaterModal/AddWaterModal';
import Modal from '../Modal/Modal';
import WaterListItem from './WaterListItem/WaterListItem';
import Loading from '../Loading/Loading';
import { WaterContainerStyled } from './WaterList.styled';
import Icon from '../Icon/Icon';
import { useTranslation } from 'react-i18next';
import { addScrollLock, removeScrollLock } from '../Modal/services/services';

export interface IWaterData {
  waterVolume: number;
  time: string;
  _id: string;
}

const WaterList = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const { entries } = useSelector(selectAmountDaily);

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const closeModal = () => {
    setVisible(false);
    removeScrollLock();
  };

  return (
    <WaterContainerStyled>
      <h2 className="water-title">{t('homepage.h2-3Today')}</h2>
      {loading && !error && <Loading />}
      {entries.length === 0 ? (
        <p className="water-empty">{t('homepage.pEmpty')}</p>
      ) : (
        <ul className="water-list">
          {entries.length > 0 &&
            entries.map(({ _id, waterVolume, time }) => (
              <WaterListItem
                key={_id}
                _id={_id}
                waterVolume={waterVolume}
                time={time}
              />
            ))}
        </ul>
      )}

      <button
        className="add-water-btn"
        onClick={() => {
          setVisible(true);
          addScrollLock();
        }}
      >
        <Icon className="water-plus-icon" id="plus" />
        {t('homepage.addWaterButton')}
      </button>

      {visible && (
        <Modal setVisible={setVisible} title={t('waterList.addModal')}>
          <AddWaterModal
            title={t('waterList.addModal')}
            show={false}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </WaterContainerStyled>
  );
};

export default WaterList;
