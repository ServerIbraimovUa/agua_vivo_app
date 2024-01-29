import { useNavigate } from "react-router-dom";
import WhyDrinkWater from "../components/WhyDrinkWater/WhyDrinkWater";
import WaterConsumptionTracker from "../components/WaterConsumptionTracker/WaterConsumptionTracker";

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/signup");
  };

  return (
    <section>
      <div className="container">
        <WaterConsumptionTracker handleClick={handleClick} />
        <WhyDrinkWater />
      </div>
    </section>
  );
};

export default WelcomePage;
