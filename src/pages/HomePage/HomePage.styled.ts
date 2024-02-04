import styled from 'styled-components';
import BgImgMob from '../../assets/images/homePage/BackgroundHomeMobile.png';
import BgImgTabl from '../../assets/images/homePage/BackgroundHomeTablet.png';
import BgImgDesk from '../../assets/images/homePage/BackgroungHomeDesk.png';
import BottleMob from '../../assets/images/homePage/BottleHomeMobile.png';
import BottleTabl from '../../assets/images/homePage/BottleHomeTablet.png';
import BottleDesk from '../../assets/images/homePage/BottleHomeDesk.png';
import { device } from '../../css/deviceSize';

export const HomeSection = styled.section`
  background: url('${BgImgMob}') left 30% top -15%, 320px 320px no-repeat;
  @media ${device.tablet} {
    background: url('${BgImgTabl}') left 40% top 0, 768px 1280px no-repeat;
  }
  @media ${device.desktop} {
    background-image: url('${BgImgDesk}'), url('${BgImgDesk}');
    background-position: left 10% top 15%, right -10% top 15%;
  }
`;

export const ContainerWrapper = styled.div`
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
  @media ${device.tablet} {
    padding-top: 10px;
  }
  @media ${device.desktop} {
  }

  background-repeat: no-repeat;
  object-fit: cover;
  background-position-x: 70px;
  background-position-y: 100px;
  @media ${device.tablet} {
    background-position-x: 0px;
  }
`;

export const ImgContainer = styled.div`
  min-width: 280px;
  min-height: 208px;
  margin-bottom: 20px;
  background-image: url('${BottleMob}');
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tablet} {
    min-width: 581px;
    min-height: 368px;
    background-image: url('${BottleTabl}');
    background-position: center;
    margin-bottom: 15px;
  }
  @media ${device.desktop} {
    background-image: url('${BottleDesk}');
    background-size: cover;
    width: 592px;
    min-height: 548px;
  }
`;

export const ContainerCalendar = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 8px;
  margin-bottom: 40px;
  height: auto;

  background-color: var(--secondary-white);

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${device.tablet} {
    padding: 36px 24px;
  }

  @media ${device.desktop} {
    width: 592px;
    margin-bottom: 0px;
    padding-top: 24px;
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
