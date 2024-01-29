import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .text {
    font-size: 16px;
    color: var(--primary-blue);
  }
  img {
    width: 28px;
  }
  @media ${device.tablet} {
    .text {
      font-size: 18px;
    }
  }
`;
