import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  li {
    padding-left: 16px;
    display: flex;
    position: relative;
    &::before {
      left: 0;
      content: "";
      bottom: 43%;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #407bff;
    }
  }
`;
export const Div = styled.div`
  padding: 24px 16px;
  background-color: var(--secondary-white);
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media ${device.tablet} {
    width: 494px;
    padding: 32px 24px;
  }
  @media ${device.desktop} {
    height: 332px;
  }

  h3 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    line-height: 1.11;
  }
`;
export const Section = styled.section`
  position: fixed;
  bottom: 0;
`;