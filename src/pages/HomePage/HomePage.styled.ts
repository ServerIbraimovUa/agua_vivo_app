import styled from "styled-components";
import BgImgMob from "../../assets/images/homePage/Background element Home screen mobile.png"
import BottleMob from "../../assets/images/homePage/Bottle home screen mobile.png"

export const StyledHomePageSection = styled.section`
    background-image: url("${BgImgMob}");    
    background-repeat: no-repeat;  
    object-fit: cover;
    background-position-x: 50px;
    background-position-y: 100px;

`
export const ContainerDailyNorma = styled.div`
    background-image: url("${BottleMob}");
    background-repeat: no-repeat;  
    object-fit: contain;
    background-position-y: 90px;
 
`