import WaterList from "../components/WaterList/WaterList";
import WaterRatio from "../components/WaterRatio/WaterRatio";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <WaterList />
        <WaterRatio />
      </div>
    </section>
  );
};

export default HomePage;
