import DailyNorma from "../components/DailyNorma/DailyNorma";
import WaterList from "../components/WaterList/WaterList";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <DailyNorma/>
        <WaterList />
      </div>
    </section>
  );
};

export default HomePage;
