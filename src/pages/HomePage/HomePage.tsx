import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterList from '../../components/WaterList/WaterList';
import WaterRatio from '../../components/WaterRatio/WaterRatio';
import { useEffect, useState } from 'react';
import { getAmountDailyThunk } from '../../redux/water/water.operations';
import { useAppDispatch } from '../../redux/redux_ts/hook';
import {
  ContainerCalendar,
  ContainerDailyNorma,
  ContainerWrapper,
  CopirightText,
  StyledHomePageSection,
  TeamContainerDiv,
  TeamForce,
} from './HomePage.styled';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import Modal from '../../components/Modal/Modal';
import TeamModal from '../../components/TeamModal/TeamModal';
import { addScrollLock } from '../../components/Modal/services/services';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAmountDailyThunk());
  }, [dispatch]);

  const { t } = useTranslation();
  return (
    <>
      <StyledHomePageSection>
        <div className="container">
          <ContainerWrapper>
            <ContainerDailyNorma>
              <DailyNorma />
              <WaterRatio />
            </ContainerDailyNorma>
            <ContainerCalendar className="fourth-step">
              <WaterList />
              <div className="mont-box fifth-step">
                <Link to="/home">
                  <Icon
                    className={`month-icon ${
                      location.pathname === '/home' ? 'active' : ''
                    }`}
                    id="date"
                  />
                </Link>
                <Link to="/home/graf">
                  <Icon
                    className={`month-icon ${
                      location.pathname === '/home/graf' ? 'active' : ''
                    }`}
                    id="chart"
                  />
                </Link>
              </div>
              <Outlet />
              <TeamContainerDiv>
                <CopirightText>copyright © 2024 | </CopirightText>
                <TeamForce
                  onClick={() => {
                    setVisible(true);
                    addScrollLock();
                  }}
                >
                  by TeamForce
                </TeamForce>
              </TeamContainerDiv>
            </ContainerCalendar>
          </ContainerWrapper>
        </div>
      </StyledHomePageSection>
      {visible && (
        <Modal
          setVisible={setVisible}
          isTeamModal={true}
          title={t('team.title')}
        >
          <TeamModal />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
