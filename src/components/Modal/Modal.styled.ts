import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const Overlay = styled.div`
  background: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;

  .modal {
   // min-width: 592px;
    min-width: 280px;
    max-width: 1008px;
    min-height: 208px;

    /* max-height: 592px; */
    background: var( --secondary-white);  
    height: 90%;
    
    border-radius: 8px;
    overflow: hidden;
    padding: 24px 12px;
    overflow: auto;

    @media ${device.tablet} {
      padding: 32px 24px;      
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #2f2f2f;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 24px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;

      transition: transform 350ms ease-in-out;

      &:hover {
        transform: rotate(90deg);
      }
      .modal-icon {
        width: 24px;
        height: 24px;
        stroke: #407bff;
      }
    }
  }
`;
