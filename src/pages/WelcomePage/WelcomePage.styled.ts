import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const DivStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;

  @media ${device.tablet} {
    gap: 60px;
  }
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: center;
    gap: 81px;
    align-items: flex-end;
  }
`;

export const TeamContainerDiv = styled.div`
  position: absolute;
  bottom: 50px;
  right: 35px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 7px;

  @media ${device.tablet} {
    position: absolute;
    bottom: 50px;
    right: 425px;
  }

  @media ${device.desktop} {
    position: absolute;
    bottom: 50px;
    right: 230px;
  }
`;
