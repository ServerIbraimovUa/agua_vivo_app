import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const StyledAuthForm = styled.form`
  max-width: 280px;
  min-height: 396px;
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
    width: 24px;
    height: 24px;
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
