import DailyNorma from "../components/DailyNorma/DailyNorma";
import WaterList from "../components/WaterList/WaterList";
import Calendar from "../components/Calendar/Calendar";
import WaterRatio from "../components/WaterRatio/WaterRatio";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <DailyNorma />
        <WaterList />
        <Calendar />
        <WaterRatio />
      </div>
    </section>
  );
};

export default HomePage;
