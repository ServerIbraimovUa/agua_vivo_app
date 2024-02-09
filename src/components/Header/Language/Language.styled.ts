import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const SelectDiv = styled.div`
  position: relative;
  display: inline-block;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;

    div {
      display: flex;
      align-items: center;
    }
  }

  .icon-flag {
    width: 28px;
    height: 28px;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    list-style: none;
    margin: 0;
    top: 100%;
    left: -36px;
    width: 100px;
    list-style-type: none;
    padding: 16px;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
    border-radius: 10px;
    z-index: 1;

    li {
      button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        cursor: pointer;

        .icon-flag {
          width: 28px;
          height: 28px;
        }

        span {
          font-size: 16px;
          color: var(--primary-blue);
          font-family: "Roboto-Regular", sans-serif;
          margin-left: 12px; // Доданий відступ між іконкою та текстом
        }
      }
    }
  }
`;

export const ModalDiv = styled.div`
  .lang-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon-flag {
    width: 100px;
  }

  @media ${device.tablet} {
    .lang-list {
      flex-direction: row;
      gap: 160px;
    }
  }
`;
