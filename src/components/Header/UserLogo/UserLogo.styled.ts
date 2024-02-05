import styled from "styled-components";
import { device } from "../../../css/deviceSize";

export const UserLogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media ${device.desktop} {
    gap: 16px;
  }

  .question-icon {
    width: 28px;
    height: 28px;

    &:hover {
      fill: var(--secondary-orange);
    }
  }
`;
