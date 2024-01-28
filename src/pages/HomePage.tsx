import WaterList from "../components/WaterList/WaterList";
import Calendar from "../components/Calendar/Calendar";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <Calendar></Calendar>
        <WaterList />
      </div>
    </section>
  );
};

export default HomePage;
