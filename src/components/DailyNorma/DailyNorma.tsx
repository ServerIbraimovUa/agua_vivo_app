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
import { addScrollLock, removeScrollLock } from '../Modal/services/services';

const DailyNorma: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const waterRate = useSelector(selectDailyNorma);

  return (
    <>
      <WrapperImg>
        <Wrapper className="first-step">
          <Title>My daily norma</Title>
          <WrapperButton>
            <SpanNorma>{waterRate} L</SpanNorma>
            {visible && (
              <Modal
                setVisible={setVisible}
                title="My Daily Norma"
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
              Edit
            </EditButton>
          </WrapperButton>
        </Wrapper>
      </WrapperImg>
    </>
  );
};

export default DailyNorma;
