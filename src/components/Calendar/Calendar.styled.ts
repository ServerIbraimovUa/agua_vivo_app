import styled from 'styled-components';
import { device } from '../../css/deviceSize';

export const CalendarContainer = styled.div`
  position: relative;
  z-index: 50;
  width: 264px;
  background-color: transparent;

  .right-align {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
  }
  .header {
    display: flex;
    align-items: center;
  }
  .month-title {
    color: #407bff;
    padding-left: 10px;
    padding-right: 10px;
  }
  .button {
    color: #407bff;
    border: none;
    background-color: transparent;
    flex-shrink: 0;
  }
  .button.disabled {
    color: grey;
    cursor: not-allowed;
  }
  .month {
    font-size: 26px;
    color: #2f2f2f;
  }

  @media ${device.tablet} {
    width: 646px;

    .month {
      font-weight: var(--medium-font-weight);
    }
  }
  @media ${device.desktop} {
    width: 544px;
    height: 335px;
  }
`;

export const Days = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 16px 26px;

  @media ${device.tablet} {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 34px;
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(10, 1fr);
    gap: 20px 22px;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
  .procent {
    color: #9ebbff;
    text-align: center;
    font-size: 12px;
  }
`;

export const Day = styled.span`
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${device.tablet} {
    width: 34px;
    height: 34px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  display: none;

  &.open {
    display: block;
  }
`;

export const ModalContent = styled.div`
  width: 292px;
  height: 188px;
  background-color: #fff;
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;

  .close {
    position: absolute;
    top: 24px;
    right: 16px;
    font-size: 20px;
    color: #407bff;
  }
  .title-modal {
    position: absolute;
    top: 24px;
    color: #407bff;
    font-size: 16px;
    margin-bottom: 16px;
  }
  .modal-paragraf {
    font-size: 16px;
    color: #2f2f2f;
    line-height: 20px;
  }
  .modal-paragraf-one {
    margin-top: 36px;
  }
  .modal-paragraf-two-three {
    margin-top: 16px;
  }
  .span-modal {
    margin-left: 6px;
    color: #407bff;
    font-size: 18px;
  }
`;

export const LowPercentageDay = styled(Day)`
  border: #ff9d43 1px solid;
`;
