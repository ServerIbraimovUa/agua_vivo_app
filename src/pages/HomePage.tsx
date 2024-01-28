import DailyNorma from "../components/DailyNorma/DailyNorma";
import WaterList from "../components/WaterList/WaterList";
import Calendar from "../components/Calendar/Calendar";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <DailyNorma />
        <WaterList />
        <Calendar />
      </div>
    </section>
  );
};

export default HomePage;
