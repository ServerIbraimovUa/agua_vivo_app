import { createGlobalStyle } from "styled-components";
import Regular from "./assets/fonts/Roboto-Regular.ttf";
import Medium from "./assets/fonts/Roboto-Medium.ttf";
import Bold from "./assets/fonts/Roboto-Bold.ttf";
import { device } from "./css/deviceSize";
import "modern-normalize/modern-normalize.css";
import "./index.css";
export const GlobalStyle = createGlobalStyle`

:root{
  // COLORS
  // * Primary colors: 

  --primary-white:#FFFFFF;
  --primary-black: #2F2F2F;
  --primary-blue: #407BFF;

  // * Secondary colors: 

  --secondary-white:#ECF2FF;
  --secondary-red: #EF5050;
  --secondary-blue: #9EBBFF;
  --secondary-orange: #FF9D43;
  --secondary-light-blue: #D7E3FF;

 // * DailyNorma text color:

 --daily-norma-formula-txt-clr: #8F8F8F;

  // FONTS
  --standart-font-size: 16px;
  --standart-line-height: 1.25;
  --regular-font-weight: 400;
  --medium-font-weight: 500;
  --bold-font-weight: 700;

  // INDEX
  --high-index: 100;


}

// FONTS 

@font-face {
    font-family: 'Roboto-Regular',sans-serif;
    src: url(${Regular}) format('truetype'),
    }

  @font-face {
    font-family: 'Roboto-Medium',sans-serif;
    src: url(${Medium}) format('truetype'),
    }

  @font-face {
    font-family: 'Roboto-Bold',sans-serif;
    src: url(${Bold}) format('truetype'),
    }

  // STYLES

  #root,
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    font-weight: var(--regular-font-weight);
    font-style: normal;
    font-size: var(--standart-font-size);
    line-height: var(--standart-line-height);
    
    color: var(--primary-black);
    background-color: var(--primary-white);
}

  .is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.no-scroll {
  overflow: hidden;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

  .btn {
    padding-left: 30px;
    padding-right: 30px;
    color: var(--primary-white);
    background-color: var(--primary-blue);
   }
    
 
// CONTAINER

section{
  padding-top: 24px;
  @media ${device.tablet} {
    padding-top: 40px;
  }
  @media ${device.desktop} {
    padding-top: 80px;
  }
}

.container {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto; 
  outline: 1px solid black;
  
  @media ${device.mobile} {
        max-width: 360px;
        }
  
  @media ${device.tablet} {
        max-width: 744px;
        }

    @media ${device.desktop} {
        max-width: 1264px;
        padding-left: 24px;
        padding-right: 24px;
    }
}

`;
