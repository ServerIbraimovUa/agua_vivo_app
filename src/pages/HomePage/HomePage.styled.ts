import styled from "styled-components";

import BgImgHomeMob from "../../assets/images/homePage/BgHomeMob.png";
import BgImgHomeTab from "../../assets/images/homePage/BgHomeTabl.png";
import BgImgHomeDesk from "../../assets/images/homePage/BgHomeDesk.png";
import { device } from "../../css/deviceSize";

export const StyledHomePageSection = styled.section`
  background-image: url("${BgImgHomeMob}");

  background-repeat: no-repeat;
  background-position: 50% 115px;

  @media ${device.tablet} {
    background-image: url("${BgImgHomeTab}");
    background-position: 50% 60px;
  }
  @media ${device.desktop} {
    background-image: url("${BgImgHomeDesk}");
    background-position: 50% 65px;
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
  background-repeat: no-repeat;
  object-fit: contain;

  padding: 24px 8px;

  @media ${device.tablet} {
    padding-top: 0px;
    padding-bottom: 32px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${device.desktop} {
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

  background-repeat: no-repeat;
  object-fit: cover;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  @media ${device.tablet} {
    padding: 32px 24px;
  }

  @media ${device.desktop} {
    width: 592px;
    max-height: 688px;

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
  bottom: 47px;
  right: 20px;
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
  text-transform: uppercase;
  font-size: 14px;
  color: var(--primary-blue);
  font-weight: var(--bold-font-weight);
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const TeamForce = styled.button`
  font-size: 14px;
  font-weight: var(--bold-font-weight);
  padding-bottom: 2px;
  border-bottom: 3px solid;
  color: var(--primary-blue);
  @media ${device.tablet} {
    font-size: 16px;
  }
`;
