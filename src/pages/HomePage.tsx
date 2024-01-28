import WaterList from "../components/WaterList/WaterList";
import Calendar from "../components/Calendar/Calendar";

const HomePage = () => {
  return (
    <section>
      <div className="container">    
        <WaterList />
        <Calendar />
      </div>
    </section>
  );
};

export default HomePage;
