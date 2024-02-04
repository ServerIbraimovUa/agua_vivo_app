import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const WaterRatioContainer = styled.div`
  width: 280px;
  @media ${device.tablet} {
    width: 704px;
  }
  @media ${device.desktop} {
    width: 592px;
  }
  .water-ratio-plus {
    width: 18px;
    height: 18px;
  }
`;

export const WaterRatioThumb = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 16px;
  }
  @media ${device.desktop} {
    display: flex;
    gap: 24px;
  }
`;

export const RangeContainer = styled.div`
  width: 280px;
  @media ${device.tablet} {
    width: 356px;
  }
  @media ${device.desktop} {
    width: 391px;
  }
`;

export const WaterRatioRangeThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WaterRatioTitle = styled.h3`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primary-blue);

  @media ${device.tablet} {
    padding-bottom: 16px;
  }
`;

export const RenderTrack = styled.div`
  height: 8px;
  width: 256px;
  border-radius: 3px;

  @media ${device.tablet} {
    width: 325px;
  }
  @media ${device.desktop} {
    width: 360px;
  }
`;

export const RenderThumb = styled.div`
  height: 14px;
  width: 14px;
  border: 1px solid #407bff;
  border-radius: 50%;
  background-color: #fff;
`;

export const OutputThumb = styled.div`
  position: relative;
  top: 24px;
`;

export const Output = styled.output`
  position: absolute;
  left: -3px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
`;

export const PointsThumb = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const PointsSpan = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: var(--primary-blue);
`;

export const WaterRatioBtnThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 280px;
  @media ${device.tablet} {
    width: 336px;
  }
  @media ${device.desktop} {
    width: 178px;
  }
`;

export const WaterRatioBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  gap: 5px;
  font-weight: var(--medium-font-weight);
  border-radius: 10px;

  @media ${device.tablet} {
    height: 44px;
  }
`;
