import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const TextModal = styled.p`
  margin-bottom: 24px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 24px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const BtnLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: var(--medium-font-weight);

  width: 232px;
  height: 36px;
  border-radius: 10px;
  color: var(--primary-white);
  background-color: var(--secondary-red);
  &:hover,
  &:focus {
    box-shadow: var(--btn-box-shadow);
  }
  &:active {
    cursor: inherit;
  }

  @media ${device.tablet} {
    width: 160px;
    height: 44px;
  }
`;

export const BtnCancel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: var(--medium-font-weight);

  width: 232px;
  height: 36px;
  border-radius: 10px;
  color: var(--primary-blue);
  background-color: var(--secondary-light-blue);
  &:hover,
  &:focus {
    box-shadow: var(--btn-box-shadow);
  }
  &:active {
    cursor: inherit;
  }

  @media ${device.tablet} {
    width: 160px;
    height: 44px;
  }
`;
