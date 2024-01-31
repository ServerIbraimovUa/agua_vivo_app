import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const CalendarContainer = styled.div`
  position: relative;
  
  width: 264;
  height: 500px;
  background-color: #ecf2ff;
    @media ${device.tablet} {
    width: 646px;
    height: 315px;
  }
  @media ${device.desktop} {
width: 544px;
height: 320px;
  }

  .right-align {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 32px;
    width: 100%;
    margin-top: 6px;
    margin-left: auto;
    margin-bottom: 16px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 32px;
    width: 100%;
    margin-top: 6px;
    margin-left: auto;
  }
  .month-title {
    font-size: 16px;
    color: #407bff;
    width: 132px;
    text-align: center;
  }
  .button {
    color: #407bff;
    border: none;
    background-color: transparent;
    padding: 5px 10px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .month {
    font-size: 26px;
    color: #2F2F2F;
    margin-left: 0;
    
  }
`

export const Days = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;

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
  padding: 7px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
    cursor: pointer;
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
