import DailyNorma from "../components/DailyNorma/DailyNorma";
import WaterList from "../components/WaterList/WaterList";
import Calendar from "../components/Calendar/Calendar";
import WaterRatio from "../components/WaterRatio/WaterRatio";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAmountDailyThunk } from "../redux/water/water.operations";

const HomePage = () => {
  const [percentageValue] = useState([50]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAmountDailyThunk()).then((data) => {
  //     console.log(data);
  //     // setPercentageValue([data.percentage]);
  //   });
  // }, []);
  return (
    <section>
      <div className="container">
        <DailyNorma />
        <WaterList />
        <Calendar />
        <WaterRatio value={percentageValue} />
      </div>
    </section>
  );
};

export default HomePage;
