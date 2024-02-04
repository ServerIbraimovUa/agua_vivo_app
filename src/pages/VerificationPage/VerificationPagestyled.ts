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
    background-position-x: 70px;
    flex-direction: column;
    justify-content: space-between;

@media ${device.tablet} {
    background-image: url("${BgImgTabl}"); 
}
@media ${device.desktop} {
    background-image: url("${BgImgDesk}"); 
  }
`

export const WrapperImg=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding-top: 130px;
    @media ${device.tablet}{
        padding-top: 50px;
    }
    @media ${device.desktop}{
        padding-top: 0px;       
    }
  `
  export const ImgGarage=styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: var(--btn-box-shadow);
@media ${device.tablet} {
  width: 400px;  
}
@media ${device.desktop} {
  width: 500px;
   
}
`
export const ContainerLink=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;   
    
    justify-content: end;
    align-items: center;
    height: 450px;
    margin-bottom: 20px;
  
    .icon-mail{
      position: absolute;
      width: 40px;
      height: 40px;
      top:110px;
      left:220px;
      border-radius: 5px;
      box-shadow: var(--btn-box-shadow);
      @media ${device.tablet} {
        top:100px;
        left:45px;
      }
      @media ${device.desktop} {
        top:120px;
        left:70px;
      }
        
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

export const Button=styled.button`
    color:var(--primary-blue);
    font-weight: var(--bold-font-weight);  
   
    &:hover,
    &:focus{
    text-decoration: underline;
    text-decoration-color:var(--secondary-orange);
    text-decoration-thickness:2px;
    font-size: 18px;    
}
@media ${device.tablet} {
    position:absolute;
    top:280px;
    left:40px;
    font-size: 18px;
    &:hover,
    &:focus{
        font-size: 20px;
    }
  }
  @media ${device.desktop}{
    top: 370px;
    left:50px;
    font-size: 20px;
    &:hover,
    &:focus{
        font-size: 22px;
    }
  }
`
export const WrapperContainer=styled.div`
   
    background-image: url("${BottleMob}");
    background-repeat: no-repeat;
    object-fit: cover;
    background-position-y: 90px;
    background-position-x: 20px;

@media ${device.tablet} {
    flex-direction: column;
    background-image: url("${BottleTabl}"); 
    height:400px;
 
    background-position-y: 10px;
    background-position-x: 270px;
}
@media ${device.desktop} {
    display: flex;
    flex-direction: row;
    background-repeat:no-repeat;
    
    background-image: url("${BottleDesk}");
    height:600px;
    margin-bottom: 0px;
    background-position-y: 10px;
    background-position-x: 220px;
}

`