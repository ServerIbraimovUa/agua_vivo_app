import styled from "styled-components";

export const CalendarContainer = styled.div`
  position: relative;
  width: 544px;
  height: 100%;
  background-color: #ecf2ff;

  .RightAlign {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 32px;
    width: 100%;
    margin-top: 6px;
    margin-left: auto;
  }
  .MonthTitle {
    font-size: 16px;
    color: #407bff;
  }
  .Button {
    color: #407bff;
    border: none;
    background-color: transparent;
    padding: 5px 10px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;

export const Days = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-items: center;

  gap: 4px;

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
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: #407bff;
  }
  .TitleModal {
    color: #407bff;
    font-size: 16px;
  }
  .ModalParagraf {
    font-size: 16px;
    color: #2f2f2f;
    line-height: 20px;
  }
  .SpanModal {
    margin-left: 6px;
    color: #407bff;
    font-size: 18px;
  }
`;

export const LowPercentageDay = styled(Day)`
  border: #ff9d43 1px solid;
`;
