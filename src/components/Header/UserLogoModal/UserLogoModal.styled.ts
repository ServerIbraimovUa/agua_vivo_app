import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: relative;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  .open-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;

    border: none;
    background-color: transparent;

    .name::first-letter {
      text-transform: uppercase;
    }
    .arrow-down {
      width: 16px;
      height: 16px;
    }

    .user-photo {
      border-radius: 28px;
      margin-left: 8px;
      margin-right: 4px;

      width: 28px;
      height: 28px;
    }
  }

  .btn-down {
    position: absolute;
    top: 34px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    width: 118px;
    height: 88px;
    display: none;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

    &.open {
      display: flex;
    }
    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    .gear_settings {
      width: 24px;
      height: 24px;
    }
     .logout {
      width: 24px;
      height: 24px;
    }
  }
`;
