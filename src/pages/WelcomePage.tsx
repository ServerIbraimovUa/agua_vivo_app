import { useNavigate } from "react-router-dom";
import WhyDrinkWater from "../components/WhyDrinkWater/WhyDrinkWater";
import WaterConsumptionTracker from "../components/WaterConsumptionTracker/WaterConsumptionTracker";
import styled from "styled-components";
import { device } from "../css/deviceSize";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-image: url(src/assets/images/Back_Main_Mob1.png);
  background-size: cover;
  @media ${device.tablet} {
    background-image: url(src/assets/images/Back_Main_Tab1.png);
  }
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: center;
    background-image: url(src/assets/images/Back_Main_Desc2.png),
      url(src/assets/images/Back_Main_Desc1.png);
    background-position: center, center 228px;
  }
`;

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/signup");
  };

  return (
    <section>
      <DivStyled className="container">
        <WaterConsumptionTracker handleClick={handleClick} />
        <WhyDrinkWater />
      </DivStyled>
    </section>
  );
};

export default WelcomePage;
