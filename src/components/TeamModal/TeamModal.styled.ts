import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const SwipeImg = styled.img`
  display: block;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 170px;
  height: 170px;
  object-fit: cover;
  overflow: hidden;
  border: 6px dotted var(--secondary-blue);
  border-radius: 50%;
  @media ${device.tablet} {
    width: 240px;
    height: 240px;
    margin: 0;
  }
`;

export const SwipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 210px;
  margin: 0 auto;

  @media ${device.tablet} {
    margin: 0;
    gap: 15px;
  }
`;

export const SwipeTitle = styled.h2`
  width: 150px;
  text-align: center;
  font-size: 20px;
  line-height: 1.33;
  font-weight: var(--bold-font-weight);

  @media ${device.tablet} {
    width: 100%;
    font-size: 24px;
  }
`;

export const RoleText = styled.p`
  font-size: 18px;
  font-style: italic;
  font-weight: var(--medium-font-weight);
  @media ${device.tablet} {
    font-size: 22px;
  }
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 180px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 18px;
    width: 200px;
    text-align: center;
  }
`;

export const IconList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SwipeLink = styled.a`
  .swipe-icon {
    width: 24px;
    height: 24px;
    fill: var(--primary-blue);

    @media ${device.tablet} {
      width: 28px;
      height: 28px;
    }
  }
`;
