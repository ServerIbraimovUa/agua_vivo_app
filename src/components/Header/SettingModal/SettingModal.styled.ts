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
    stroke: #407bff;
    cursor: pointer;
  }

  .text-loading {
    font-size: 14px;
    font-weight: 500;
    color: #407bff;
    cursor: pointer;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .password-sub-title {
    font-size: 16px;
  }
`;

export const FormNameInput = styled.input`
  width: 256px;
  height: 44px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 36px 12px 8px;
  color: #407bff;
  background-color: #ffffff;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #9ebbff;
  }
  @media ${device.tablet} {
    width: 392px;
  }
`;

export const FormEmailInput = styled.input`
  width: 256px;
  height: 44px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 36px 12px 8px;
  color: #407bff;
  background-color: #ffffff;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #9ebbff;
  }
  @media ${device.tablet} {
    width: 392px;
  }
`;

export const FormPasswordInput = styled.input`
  width: 256px;
  height: 44px;
  border: 1px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 36px 12px 8px;
  color: #407bff;
  background-color: #ffffff;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #9ebbff;
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
  color: #ffffff;
  box-shadow: 0px 4px 8px 0px #407bff57;
  background-color: #407bff;

  @media ${device.tablet} {
    width: 160px;
    align-self: flex-end;
    &:hover,
    &:focus {
      box-shadow: var(--btn-box-shadow);
    }
    &:active {
      cursor: pointer;
    }
  }
`;
