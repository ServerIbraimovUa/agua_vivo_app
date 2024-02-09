import { useState } from 'react';
import Modal from '../Modal/Modal';
import DailyNormaModal from './DailyNormaModal';
import {
  EditButton,
  SpanNorma,
  Title,
  Wrapper,
  WrapperButton,
  WrapperImg,
} from './DailyNorma.styled';
import { useSelector } from 'react-redux';
import { selectDailyNorma } from '../../redux/auth/authSelectors';
import { useTranslation } from 'react-i18next';
import { addScrollLock, removeScrollLock } from '../Modal/services/services';

const DailyNorma: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const waterRate = useSelector(selectDailyNorma);
  const { t } = useTranslation();
  return (
    <>
      <WrapperImg>
        <Wrapper className="first-step">
          <Title>{t('homepage.h3DailyNorma')}</Title>
          <WrapperButton>
            <SpanNorma>
              {waterRate} {t('homepage.litres')}
            </SpanNorma>
            {visible && (
              <Modal
                setVisible={setVisible}
                title={t('homepage.h3DailyNorma')}
                daily={true}
              >
                <DailyNormaModal
                  onClose={() => {
                    setVisible(false);
                    removeScrollLock();
                  }}
                />
              </Modal>
            )}
            <EditButton
              type="button"
              onClick={() => {
                setVisible(true);
                addScrollLock();
              }}
            >
              {t('homepage.editButton')}
            </EditButton>
          </WrapperButton>
        </Wrapper>
      </WrapperImg>
    </>
  );
};

export default DailyNorma;
