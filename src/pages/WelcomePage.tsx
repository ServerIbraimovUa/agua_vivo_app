import { useNavigate } from "react-router-dom";
import WhyDrinkWater from "../components/WhyDrinkWater/WhyDrinkWater";
import WaterConsumptionTracker from "../components/WaterConsumptionTracker/WaterConsumptionTracker";
import styled from "styled-components";
import { device } from "../css/deviceSize";
import { WelcomeSection } from "../components/WhyDrinkWater/WhyDrinkWaterStyled.styled";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${device.tablet} {
    gap: 60px;
  }
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: center;
    gap: 81px;
    align-items: flex-end;
  }
`;

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/signup");
  };

  return (
    <WelcomeSection className="welcome-section">
      <DivStyled className="container">
        <WaterConsumptionTracker handleClick={handleClick} />
        <WhyDrinkWater />
      </DivStyled>
    </WelcomeSection>
  );
};

export default WelcomePage;
