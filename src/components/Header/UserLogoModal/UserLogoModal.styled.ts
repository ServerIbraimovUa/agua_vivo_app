import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: relative;
  min-width: 122px;
  height: 22px;
  .open-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-size: 18px;
    border: none;
    background-color: transparent;

    .user-photo {
      width: 28px;
      height: 28px;
    }
  }

  .btn-down {
    position: absolute;
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
    }
  }
`;
