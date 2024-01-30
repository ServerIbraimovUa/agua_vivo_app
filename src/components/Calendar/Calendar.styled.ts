import styled from 'styled-components';

export const CalendarContainer = styled.div`
  position: relative;
  width: 544px;
 height: 100%;
  background-color: #ECF2FF;
  .header {
     display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  width: 100%;
  margin-bottom: 16px;
  }
  .RightAlign {
      margin-top: 6px;
  margin-left: auto;
  height: 20px;
  display: flex;
  align-items: center;
  }
  .MonthTitle {
      font-size: 16px;
  color: #407BFF;
  }
  .Button {
    color: #407BFF;
  border: none;
  background-color: transparent;
  padding: 5px 10px;
  flex-shrink: 0;
  cursor: pointer;
  }
`;


export const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 4px;
  .procent {
    color: #9EBBFF;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  }
`;

export const Day = styled.div`
  padding: 7px;
  background-color: #FFF;
  border-radius: 50%;
  text-align: center;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

// export const Button = styled.button`
//   color: #407BFF;
//   border: none;
//   background-color: transparent;
//   padding: 5px 10px;
//   flex-shrink: 0;
//   cursor: pointer;
// `;

export const Modal = styled.div`
  position: fixed;
  top: var(--modal-top);
  left: var(--modal-left);
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  width: 292px;
  height: 188px;
  background-color: #fff;
  /* padding: 16px; */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  .close {
      position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #407BFF;
  }
  .TitleModal {
     color: #407BFF;
  font-size: 16px;
  }
  .ModalParagraf {
      font-size: 16px;
  color: #2f2f2f;
  line-height: 20px;
  }
  .SpanModal {
      margin-left: 6px;
  color: #407BFF;
  font-size: 18px;
  }
`;


export const Container = styled.div`
  margin-top: 24px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 24px;
`;




export const LowPercentageDay = styled(Day)`
  border: #FF9D43 1px solid;
`;