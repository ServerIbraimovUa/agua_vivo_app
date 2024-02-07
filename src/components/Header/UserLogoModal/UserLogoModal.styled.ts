import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: relative;
  height: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .open-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
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

    width: 118px;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
    display: none;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
    z-index: 10000;

    &.open {
      display: flex;
    }

    .gear_settings,
    .logout {
      width: 16px;
      height: 16px;
    }

    .btn-container-logout {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 16px 16px 16px;
    }
    .btn-container-setting {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px 16px 8px 16px;
    }
    .btn-container-lang {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 16px 8px 16px;
    }
    .button-popover-name {
      display: flex;
      
      width: 62px;
      margin-left: 8px;
      font-size: 16px;
      color: var(--primary-blue);
      font-family: "Roboto-Regular", sans-serif;
    }

    .button-popover {
      display: flex;
      align-items: center;
    }
  }
`;
