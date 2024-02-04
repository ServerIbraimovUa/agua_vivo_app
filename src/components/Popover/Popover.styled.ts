import styled from "styled-components";
import { device } from "../../css/deviceSize";

interface Props {
    $dailyNorma: boolean | undefined;
    $waterAmount: boolean | undefined;    
}

export const PopoverWrapper = styled.span<Props>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;

  background-color: var(--secondary-light-blue);
  border-radius: 10px;
  border-bottom-left-radius: 0;
  width: 200px;
  height: 80px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  top: ${(props) => (props.$dailyNorma ? "-90px":"-80px")};
  left: ${(props) => (props.$dailyNorma && "-170px")};
  left: ${(props) => (props.$waterAmount && "125px")};
  top: ${(props) => (props.$waterAmount && "0px")};
  width: ${(props) => (props.$waterAmount && "140px")};
 
  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    right: 20px;
    top: 100%;
    border-bottom: 35px solid transparent;
    border-right: 30px solid var(--secondary-light-blue);
    border-top: transparent;
  }

  @media ${device.tablet} {
    top: -70px;
    left: 25px;
    top: ${(props) => (props.$dailyNorma ? "-70px":"-75px")};
    left: ${(props) => (props.$dailyNorma ? "25px":"150px")};
    left: ${(props) => (props.$waterAmount && "220px")};
    top: ${(props) => (props.$waterAmount && "-70px")};
    width: ${(props) => (props.$waterAmount && "200px")};
    &::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      right: 100%;
      top: 75%;
      border-top: 20px solid transparent;
      border-right: 30px solid var(--secondary-light-blue);
      border-bottom: transparent;
    }
    &::after {
      display: none;
    }
  }
`;

export const PopoverMessage = styled.span`
  color: var(--primary-blue);
  font-size: 18px;
`;