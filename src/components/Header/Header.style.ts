import styled from "styled-components";
import { device } from "../../css/deviceSize";

export const HeaderStyle = styled.header`
  padding-top: 8px;

  @media ${device.tablet} {
    padding-top: 16px;
  }
  @media ${device.desktop} {
    padding-top: 12px;
  }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
