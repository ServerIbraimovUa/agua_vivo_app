import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .icon {
    width: 40px;
    height: 48px;
  }

  .logo-text {
    text-transform: uppercase;

    width: 64px;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--primary-blue);
  }
`;
