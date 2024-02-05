import styled from 'styled-components';
import BgImgMob from '../../assets/images/homePage/BackgroundHomeMobile.png';
import BgImgTabl from '../../assets/images/homePage/BackgroundHomeTablet.png';
import BgImgDesk from '../../assets/images/homePage/BackgroungHomeDesk.png';
import BottleMob from '../../assets/images/homePage/BottleHomeMobile.png';
import BottleTabl from '../../assets/images/homePage/BottleHomeTablet.png';
import BottleDesk from '../../assets/images/homePage/BottleHomeDesk.png';
import { device } from '../../css/deviceSize';

export const StyledHomePageSection = styled.section`
  background-image: url('${BgImgMob}');
  background-repeat: no-repeat;
  object-fit: cover;
  background-position-x: 70px;
  background-position-y: 100px;
  @media ${device.tablet} {
    background-image: url('${BgImgTabl}');
    background-position-x: 0px;
    background-position-y: 80px;
  }
  @media ${device.desktop} {
    background-image: url('${BgImgDesk}');
  }
`;

export const ContainerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  }
`;
export const ContainerDailyNorma = styled.div`
  background-image: url('${BottleMob}');
  background-repeat: no-repeat;
  object-fit: contain;
  background-position-x: 10px;
  background-position-y: 90px;
  /* padding: 24px 8px; */

  @media ${device.tablet} {
    background-image: url('${BottleTabl}');
    background-position-y: 5px;
    background-position-x: 90px;
  }
  @media ${device.desktop} {
    background-image: url('${BottleDesk}');
    background-position-y: 0px;
    background-position-x: -50px;
    height: 548px;
  }
`;
export const ContainerCalendar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 8px;
  margin-bottom: 40px;
  height: auto;

  background-color: var(--secondary-white);
  background-image: url('${BgImgMob}');
  background-repeat: no-repeat;
  object-fit: cover;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${device.tablet} {
    padding: 32px 24px;
    background-image: url('${BgImgTabl}');
  }

  @media ${device.desktop} {
    width: 592px;
    max-height: 688px;
    background-image: url('${BgImgDesk}');
    margin-bottom: 0px;
  }
  .chart-container {
    width: 246px;
    height: 500px;
    @media ${device.tablet} {
      width: 646px;
      height: 264px;
    }
    @media ${device.desktop} {
      width: 544px;
      height: 320px;
    }
  }
  .mont-box {
    display: flex;
    align-items: center;
    gap: 8px;
    a:hover {
      cursor: inherit;
      scale: 1.2;
    }
  }
  .month-icon {
    width: 32px;
    height: 32px;
    fill: var(--primary-blue);

    &:hover {
      fill: var(--secondary-orange);
    }
  }
`;

export const TeamContainerDiv = styled.div`
  position: absolute;
  bottom: 0px;
  right: 4px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 7px;

  @media ${device.tablet} {
    position: absolute;
    bottom: 60px;
    right: 220px;
  }

  @media ${device.desktop} {
    position: absolute;
    bottom: 25px;
    right: 163px;
  }
`;

export const CopirightText = styled.p`
  font-weight: var(--bold-font-weight);
  text-transform: uppercase;
  color: var(--primary-blue);
`;

export const TeamForce = styled.button`
  font-weight: var(--bold-font-weight);
  padding-bottom: 2px;
  border-bottom: 3px solid;
  color: var(--primary-blue);
`;
