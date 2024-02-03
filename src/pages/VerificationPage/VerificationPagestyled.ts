import styled from "styled-components";
import BgImgMob from "../../assets/images/homePage/BackgroundHomeMobile.png";
//import BgImgTabl from "../../assets/images/homePage/BackgroundHomeTablet.png";
//import BgImgDesk from "../../assets/images/homePage/BackgroungHomeDesk.png";
import BottleMob from "../../assets/images/homePage/BottleHomeMobile.png";

export const VerificationSection=styled.section`
    background-image: url("${BgImgMob}");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const WrapperLink = styled.div`
   
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px; 
  background-color: var(--secondary-light-blue);
  border-radius: 10px;
  border-bottom-left-radius: 0;
  width: 200px;
  height: 80px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  
  `
  export const WrapperImg=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

  `

export const ContainerLink=styled.div`
    display: flex;
    background-image: url("${BottleMob}");
    background-repeat: no-repeat;
    object-fit: cover;
    background-position-y: 70px;
    background-position-x: 20px;
    justify-content: center;
    height: 280px;

`
export const Title=styled.h2`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);
    margin-bottom: 10px;
    text-align: center;

`
export const ImgGarage=styled.img`
    width: 200px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`