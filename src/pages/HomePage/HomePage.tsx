import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterList from '../../components/WaterList/WaterList';
import WaterRatio from '../../components/WaterRatio/WaterRatio';
import { useEffect } from 'react';
import { getAmountDailyThunk } from '../../redux/water/water.operations';
import { useAppDispatch } from '../../redux/redux_ts/hook';
import {
  ContainerCalendar,
  ContainerDailyNorma,
  ContainerWrapper,
  HomeSection,
  ImgContainer,
} from './HomePage.styled';

import { Link, Outlet } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAmountDailyThunk());
  }, [dispatch]);

  return (
    <HomeSection>
      <div className="container">
        <ContainerWrapper>
          <ContainerDailyNorma>
            <DailyNorma />
            <ImgContainer />
            <WaterRatio />
          </ContainerDailyNorma>
          <ContainerCalendar>
            <WaterList />
            <div className="mont-box">
              <Link to="/home">
                <Icon className="month-icon" id="date" />
              </Link>
              <Link to="/home/graf">
                <Icon className="month-icon" id="chart" />
              </Link>
            </div>
            <Outlet />
          </ContainerCalendar>
        </ContainerWrapper>
      </div>
    </HomeSection>
  );
};

export default HomePage;
