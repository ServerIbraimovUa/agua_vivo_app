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
  border-radius: 10px;
  margin-left: auto;
  font-size: 18px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: var(--primary-white);
  background-color: var(--primary-blue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;
