import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterList from "../../components/WaterList/WaterList";
import Calendar from "../../components/Calendar/Calendar";
import WaterRatio from "../../components/WaterRatio/WaterRatio";
import { useEffect } from "react";
import { getAmountDailyThunk } from "../../redux/water/water.operations";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import { ContainerCalendar, ContainerDailyNorma, StyledHomePageSection } from "./HomePage.styled";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAmountDailyThunk());
  }, [dispatch]);

  return (
    <StyledHomePageSection className="homePage-section container">      
        <ContainerDailyNorma  >
        <DailyNorma />
        <WaterRatio />
      </ContainerDailyNorma>
      <ContainerCalendar  >
        <WaterList />
        <Calendar />
      </ContainerCalendar>  
    </StyledHomePageSection>
  );
};

export default HomePage;