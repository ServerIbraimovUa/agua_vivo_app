import { useNavigate } from 'react-router-dom';
import WhyDrinkWater from '../../components/WhyDrinkWater/WhyDrinkWater';
import WaterConsumptionTracker from '../../components/WaterConsumptionTracker/WaterConsumptionTracker';
import { WelcomeSection } from '../../components/WhyDrinkWater/WhyDrinkWaterStyled.styled';
import { CopirightText, TeamForce } from '../HomePage/HomePage.styled';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import TeamModal from '../../components/TeamModal/TeamModal';
import { DivStyled, TeamContainerDiv } from './WelcomePage.styled';
import { addScrollLock } from '../../components/Modal/services/services';

const WelcomePage = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate('/signup');
  };

  return (
    <>
      <WelcomeSection className="welcome-section">
        <DivStyled className="container">
          <WaterConsumptionTracker handleClick={handleClick} />
          <WhyDrinkWater />
          <TeamContainerDiv>
            <CopirightText>copyright © 2024 | </CopirightText>
            <TeamForce
              onClick={() => {
                setVisible(true);
                addScrollLock();
              }}
            >
              by TeamForce
            </TeamForce>
          </TeamContainerDiv>
        </DivStyled>
      </WelcomeSection>
      {visible && (
        <Modal
          setVisible={setVisible}
          isTeamModal={true}
          title="Force in a team"
        >
          <TeamModal />
        </Modal>
      )}
    </>
  );
};

export default WelcomePage;
