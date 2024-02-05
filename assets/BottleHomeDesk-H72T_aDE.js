import{u as p,d as a,j as o}from"./index-538tgMtU.js";const r=p.span`
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
  top: ${t=>t.$dailyNorma?"-90px":"-5px"};
  left: ${t=>t.$dailyNorma&&"-170px"};
  top: ${t=>t.$waterAmount&&"0px"};
  left: ${t=>t.$waterAmount&&"125px"};
  width: ${t=>t.$waterAmount&&"140px"};
  top: ${t=>t.$verify&&"320px"};
  left: ${t=>t.$verify&&"10px"};
  top: ${t=>t.$advert&&"20px"};
  left: ${t=>t.$advert&&"120px"};
 
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

  @media ${a.tablet} {
    top: -70px;
    left: 25px;
    top: ${t=>t.$dailyNorma?"-70px":"40px"};
    left: ${t=>t.$dailyNorma?"25px":"120px"};
    left: ${t=>t.$waterAmount&&"220px"};
    top: ${t=>t.$waterAmount&&"-70px"};
    width: ${t=>t.$waterAmount&&"300px"};
    width: ${t=>t.$dailyNorma&&"300px"};
    top: ${t=>t.$verify&&"210px"};
    left: ${t=>t.$verify&&"140px"};
    top: ${t=>t.$advert&&"-40px"};
    left: ${t=>t.$advert&&"500px"};
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
  @media ${a.desktop}{
    top: ${t=>t.$dailyNorma?"-70px":"60px"};
    left: ${t=>t.$dailyNorma?"25px":"140px"};
    top: ${t=>t.$verify&&"300px"};
    left: ${t=>t.$waterAmount&&"245px"};
    top: ${t=>t.$waterAmount&&"-70px"};
    left: ${t=>t.$verify&&"150px"};
    width: ${t=>t.$verify&&"300px"};
    width: ${t=>t.$dailyNorma?"200px":"300px"};
    top: ${t=>t.$advert&&"520px"};
    left: ${t=>t.$advert&&"320px"};
  }
`,s=p.span`
  color: var(--primary-blue);
  font-size: 18px;  
`,n=({message:t,...e})=>o.jsx(o.Fragment,{children:o.jsx(r,{$dailyNorma:e.dailyNorma,$waterAmount:e.waterAmount,$verify:e.verify,$advert:e.advert,children:o.jsx(s,{children:t})})}),$="/agua_vivo_app/assets/BackgroundHomeMobile--bJS4c7V.png",d="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",l="/agua_vivo_app/assets/BackgroungHomeDesk-jfnsRM4P.png",x="/agua_vivo_app/assets/BottleHomeMobile-YibEMZyu.png",m="/agua_vivo_app/assets/BottleHomeTablet-obPHwKf-.png",v="/agua_vivo_app/assets/BottleHomeDesk-odvCWdoI.png";export{$ as B,n as P,d as a,l as b,x as c,m as d,v as e};
