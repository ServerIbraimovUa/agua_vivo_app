<<<<<<< Updated upstream
import React from "react";
import { Navigate, redirect } from "react-router-dom";
import WelcomeList from "../components/WelcomeList/WelcomeList";
=======
import { useNavigate } from "react-router-dom";
import WhyDrinkWater from "../components/WhyDrinkWater/WhyDrinkWater";
import WaterConsumptionTracker from "../components/WaterConsumptionTracker/WaterConsumptionTracker";
import { Section } from "../components/WhyDrinkWater/WhyDrinkWaterStyled.styled";

>>>>>>> Stashed changes
const WelcomePage = () => {
  const handleClick = () => {
    return <Navigate to="/signup" />;
  };

  return (
    <Section>
      <div className="container welcome-container">
        <WaterConsumptionTracker handleClick={handleClick} />
        <WhyDrinkWater />
      </div>
<<<<<<< Updated upstream
      <div>
        <h3>WhyDrinkWater</h3>
        <WelcomeList />
      </div>
    </section>
=======
    </Section>
>>>>>>> Stashed changes
  );
};

export default WelcomePage;
