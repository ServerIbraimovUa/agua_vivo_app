import styled from "styled-components";
import BgImgMob from "../../assets/images/homePage/BackgroundHomeMobile.png";
import BgImgTabl from "../../assets/images/homePage/BackgroundHomeTablet.png";
import BgImgDesk from "../../assets/images/homePage/BackgroungHomeDesk.png";
import BottleMob from "../../assets/images/homePage/BottleHomeMobile.png";
import BottleTabl from "../../assets/images/homePage/BottleHomeTablet.png";
import BottleDesk from "../../assets/images/homePage/BottleHomeDesk.png";
import { device } from "../../css/deviceSize";

export const VerificationSection=styled.section`
    background-image: url("${BgImgMob}");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
@media ${device.tablet} {
    background-image: url("${BgImgTabl}"); 
}
@media ${device.desktop} {
    background-image: url("${BgImgDesk}"); 
  }
`
export const WrapperLink = styled.div`
   display: flex;
  justify-content:center;
  align-items: center;
  padding: 10px; 
  background-color: var(--secondary-light-blue);
  border-radius: 10px;
  border-bottom-left-radius: 0;
  width: 200px;
  height: 60px;
  box-shadow: var(--btn-box-shadow);
  @media ${device.tablet} {
    width:300px;
    height: 80px; 
  }  
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
    margin-bottom: 20px;
@media ${device.tablet} {
    background-image: url("${BottleTabl}"); 
    height:400px;
    justify-content: start;
    background-position-y: 10px;
    background-position-x: 150px;
}
@media ${device.desktop} {
    background-image: url("${BottleDesk}");
    height:600px;
    background-position-y: 10px;
    background-position-x: 250px;
}

`
export const Title=styled.h2`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);
    margin-bottom: 10px;
    text-align: center;

@media ${device.tablet} {
    font-size: 18px;
}
`
export const ImgGarage=styled.img`
    width: 200px;
    border-radius: 10px;
    box-shadow: var(--btn-box-shadow);
@media ${device.tablet} {
    width: 400px;  
}
@media ${device.desktop} {
    width: 600px;
     
}
`