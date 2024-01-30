import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-style: "Roboto-Regular", sans-serif;
    font-size: 18px;
    .eye-input {
      position: relative;
    }
  }
  input {
    width: 100%;
    height: 44px;
    border: 1px solid #d7e3ff;
    border-radius: 6px;
    padding: 12px 36px 12px 10px;
    color: var(--secondary-light-blue);
    background-color: var(--primary-white);

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: var(--secondary-blue);
    }
  }

  /* min-height: 396px; */

  @media ${device.tablet} {
    max-width: 336px;
    max-height: 404px;
  }
  @media ${device.desktop} {
    max-width: 384px;
  }
`;
export const StyledLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  min-height: 396px;
  gap: 10px;
  .title {
    font-family: "Roboto-Medium", sans-serif;
    font-size: 26px;
    line-height: 1.23;
  }
  .auth-link {
    font-style: "Roboto-Regular", sans-serif;
    font-size: 16px;
    line-height: 1.25;
    color: var(--primary-blue);
  }
  @media ${device.tablet} {
    max-width: 336px;
    max-height: 404px;
  }
  @media ${device.desktop} {
    max-width: 384px;
  }
`;

export const StyledAuthFormSpan = styled.span`
  .eye-icon,
  .eye-outline-icon {
    top: 50%;
    right: 2px;

    transform: translate(-50%, -50%);
    position: absolute;
    width: 16px;
    height: 16px;
    fill: var(--primary-blue);
  }
`;

export const AuthFormButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  padding: 8px 30px;
  font-size: 16px;
`;
