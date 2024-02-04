import styled from "styled-components";
import { device } from "../../css/deviceSize";

interface Props {
    $dailyNorma: boolean | undefined;
    $waterAmount: boolean | undefined; 
    $verify:boolean | undefined;  
    $advert:boolean | undefined; 
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
  box-shadow: var(--btn-box-shadow);
  top: ${(props) => (props.$dailyNorma ? "-90px":"-5px")};
  left: ${(props) => (props.$dailyNorma && "-170px")};
  top: ${(props) => (props.$waterAmount && "0px")};
  left: ${(props) => (props.$waterAmount && "125px")};
  width: ${(props) => (props.$waterAmount && "140px")};
  top: ${(props) => (props.$verify && "320px")};
  left: ${(props) => (props.$verify && "10px")};
  top: ${(props) => (props.$advert && "560px")};
  left: ${(props) => (props.$advert && "160px")};
 
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
    top: ${(props) => (props.$dailyNorma ? "-70px":"40px")};
    left: ${(props) => (props.$dailyNorma ? "25px":"120px")};
    left: ${(props) => (props.$waterAmount && "220px")};
    top: ${(props) => (props.$waterAmount && "-70px")};
    width: ${(props) => (props.$waterAmount && "200px")};
    top: ${(props) => (props.$verify && "210px")};
    left: ${(props) => (props.$verify && "140px")};
    top: ${(props) => (props.$advert && "520px")};
    left: ${(props) => (props.$advert && "500px")};
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
  @media ${device.desktop}{
    top: ${(props) => (props.$dailyNorma ? "-70px":"60px")};
    left: ${(props) => (props.$dailyNorma ? "25px":"140px")};
    top: ${(props) => (props.$verify && "300px")};
    left: ${(props) => (props.$verify && "150px")};
    width: ${(props) => (props.$verify && "300px")};
    width: ${(props) => (props.$dailyNorma? "200px":"300px")};
    top: ${(props) => (props.$advert && "600px")};
    left: ${(props) => (props.$advert && "950px")};
  }
`;

export const PopoverMessage = styled.span`
  color: var(--primary-blue);
  font-size: 18px;  
`;