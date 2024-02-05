import styled from "styled-components";

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
    object-fit: cover;
    object-position: center;

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
