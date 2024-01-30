import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const Div = styled.div`
  h1 {
    font-weight: var(--bold-font-weight);
    font-size: 28px;
    line-height: 1.14;
    margin-bottom: 16px;
    width: 280px;

    @media ${device.tablet} {
      width: auto;
      font-size: 36px;
      line-height: 1.16;
    }
  }
  h2 {
    font-size: 24px;
    line-height: 1.25;
    width: 199px;
    margin-bottom: 24px;

    @media ${device.tablet} {
      width: auto;
      font-size: 26px;
      line-height: 1.23;
    }
  }

  h3 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    line-height: 1.11;
  }
  .tracker {
    margin-bottom: 24px;    
  }
  .welcome-icon {
    width: 32px;
    height: 32px;
    @media ${device.tablet} {
      width: 40px;
      height: 40px;
    }
  }
  .btn {
    display: inline-flex;
    padding: 8px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    width: 280px;
    height: 36px;
    @media ${device.tablet} {
      width: 336px;
      height: 44px;
    }
    @media ${device.desktop} {
      width: 384px;
      height: 44px;
    }

    line-height: 1.25;
    @media ${device.tablet} {
      font-size: 18px;
      line-height: 1.33;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.desktop} {
    flex-direction: column;
  }
  gap: 16px;

  li {
    display: flex;
    gap: 8px;
    align-items: center;
    p {
      line-height: 1.25;
    }
  }
`;
