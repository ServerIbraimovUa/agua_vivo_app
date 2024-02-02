import styled from "styled-components";
import BgImgMob from "../../assets/images/homePage/BackgroundHomeMobile.png";
import BgImgTabl from "../../assets/images/homePage/BackgroundHomeTablet.png";
import BgImgDesk from "../../assets/images/homePage/BackgroungHomeDesk.png";
import BottleMob from "../../assets/images/homePage/BottleHomeMobile.png";
import BottleTabl from "../../assets/images/homePage/BottleHomeTablet.png";
import BottleDesk from "../../assets/images/homePage/BottleHomeDesk.png";
import { device } from "../../css/deviceSize";

export const StyledHomePageSection = styled.section`
    background-image: url("${BgImgMob}");    
    background-repeat: no-repeat;  
    object-fit: cover;
    background-position-x: 50px;
    background-position-y: 100px;
    @media ${device.tablet} {
        background-image: url("${BgImgTabl}");
        background-position-x: 0px;
         background-position-y: 80px;
    }
    @media ${device.desktop} {            
        
        background-image: url("${BgImgDesk}");
    }

`
export const ContainerDailyNorma = styled.div`
    
    background-image: url("${BottleMob}");
    background-repeat: no-repeat;  
    object-fit: contain;
    background-position-x:30px;
    background-position-y: 90px;

    @media ${device.tablet} {
        background-image: url("${BottleTabl}");
        background-position-y: 10px;
        background-position-x: 90px;
    }
    @media ${device.desktop} {
        background-image: url("${BottleDesk}");
        background-position-y: 0px;
        background-position-x: 0px;
       
    } 
`
export const ContainerCalendar = styled.div`
    background-color: var(--secondary-white);
     background-image: url("${BgImgDesk}");
     background-repeat: no-repeat;  
     object-fit: cover;
     
     border-radius: 10px;    
     box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
     @media ${device.desktop} {
        width: 592px;
    } 
`