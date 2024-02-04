import styled from "styled-components";
import { device } from "../../css/deviceSize";
import bgDeskSignUpImg from "../../assets/images/BackSignUpDesk.png";
import bgDeskSignInImg from "../../assets/images/BackSignInDesk.png";
import bgTabAuthImg from "../../assets/images/BackAuthTab.png";
import bgMobAuthImg from "../../assets/images/BackAuthMob.png";

export const StyledRegisterSection = styled.section`
  background-repeat: no-repeat;
  padding-top: 72px;
  background-image: url(${bgMobAuthImg});
  background-position: 50% 101px;

  @media ${device.tablet} {
    padding-top: 88px;
    background-image: url(${bgTabAuthImg});
    background-position: 50% 74px;
  }
  @media ${device.desktop} {
    padding-top: 196px;
    background-image: url(${bgDeskSignUpImg});
    background-position: 50% 48px;
  }
`;

export const StyledLoginSection = styled.section`
  background-image: url(${bgMobAuthImg});
  background-repeat: no-repeat;
  padding-top: 72px;
  background-position: 50% 101px;

  @media ${device.tablet} {
    padding-top: 88px;
    background-image: url(${bgTabAuthImg});
    background-position: 50% 74px;
  }
  @media ${device.desktop} {
    padding-top: 210px;
    background-image: url(${bgDeskSignInImg});
    background-position: 50% 73px;
  }
`;

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  gap: 16px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-style: "Roboto-Regular", sans-serif;
    font-size: 18px;
    line-height: 1.33;
    .eye-input {
      position: relative;
    }
  }
  .gap-error {
    gap: 4px;
  }
  .gap-normal {
    gap: 8px;
  }

  .error {
    color: var(--secondary-red);
    font-size: 14px;
  }
  .input {
    width: 100%;
    height: 44px;
    border: 1px solid var(--secondary-light-blue);
    border-radius: 6px;
    padding: 12px 36px 12px 10px;
    color: var(--primary-blue);
    background-color: var(--primary-white);
    /* &:hover,
    &:focus {
      outline: none;
    } */

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: var(--secondary-blue);
    }
  }

  .input-red {
    border: 1px solid var(--secondary-red);
    color: var(--secondary-red);
    gap: 4px;
  }
  .input-blue {
    border: 1px solid var(--secondary-light-blue);
    color: var(--primary-blue);
    gap: 8px;
  }

  @media ${device.tablet} {
    max-width: 336px;
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
  gap: 16px;
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
    &:hover {
      color: var(--secondary-orange);
    }
  }
  @media ${device.tablet} {
    max-width: 336px;
  }
  @media ${device.desktop} {
    max-width: 384px;
    margin-left: 728px;
  }
`;

export const StyledAuthFormSpan = styled.span`
  .eye-icon,
  .eye-outline-icon {
    top: 50%;
    right: 2px;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 10;
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
  @media ${device.tablet} {
    height: 44px;
  }
`;

export const AuthFormLink = styled.a`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  padding: 8px 30px;
  font-size: 16px;
  @media ${device.tablet} {
    height: 44px;
  }
`;