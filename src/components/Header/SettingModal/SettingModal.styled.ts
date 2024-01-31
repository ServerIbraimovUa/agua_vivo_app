import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const FormSettingStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

export const FormAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const FormAvatarTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const FormAvatarLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  .avatar-setting {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .input-avatar {
    display: none;
  }

  .setting-modal-icon {
    width: 16px;
    height: 16px;
    stroke: var(--primary-blue);
    cursor: inherit;
  }

  .text-loading {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-blue);
    cursor: inherit;
  }
`;

export const FormUserWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  width: 100%;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media ${device.desktop} {
    gap: 52px;
  }
`;

export const FormGenderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  .user-gender-title {
    display: flex;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const FormGenderContair = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  width: 100%;

  .gender-label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .gender-sub-title {
    font-size: 16px;
  }
`;

export const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  .label-name,
  .label-email {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .user-info-title,
  .user-info-title {
    font-size: 18px;
  }
`;

export const FormUserPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;

  .password-title {
    font-size: 18px;
    font-weight: 500;
  }

  .password-label {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .password-sub-title {
    font-size: 16px;
  }

  .toggle-password {
    position: absolute;
    top: 40px;
    right: 16px;
  }

  .password-eye-icon,
  .password-eye-outline-icon {
    width: 16px;
    height: 16px;
    fill: var(--primary-blue);
  }
`;

export const FormNameInput = styled.input`
  width: 256px;
  height: 44px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
  padding: 12px 36px 12px 8px;
  color: var(--primary-blue);
  background-color: var(--primary-white);

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary-blue);
  }
  @media ${device.tablet} {
    width: 392px;
  }
`;

export const FormEmailInput = styled.input`
  width: 256px;
  height: 44px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
  padding: 12px 36px 12px 8px;
  color: var(--primary-blue);
  background-color: var(--primary-white);

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary-blue);
  }
  @media ${device.tablet} {
    width: 392px;
  }
`;

export const FormPasswordInput = styled.input`
  width: 256px;
  height: 44px;
  border: 1px solid var(--secondary-light-blue);
  border-radius: 6px;
  padding: 12px 36px 12px 8px;
  color: var(--primary-blue);
  background-color: var(--primary-white);

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary-blue);
  }
  @media ${device.tablet} {
    width: 392px;
  }
`;
export const BtnSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 256px;
  height: 44px;
  border-radius: 10px;
  color: var(--primary-white);
  box-shadow: var(--btn-box-shadow);
  background-color: var(--primary-blue);

  @media ${device.tablet} {
    width: 160px;
    align-self: flex-end;
    &:hover,
    &:focus {
      box-shadow: var(--btn-box-shadow);
    }
    &:active {
      cursor: inherit;
    }
  }
`;