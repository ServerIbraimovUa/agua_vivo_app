import "./index.css";
import { createGlobalStyle } from "styled-components";
import Regular from "./assets/fonts/Roboto-Regular.ttf";
import Medium from "./assets/fonts/Roboto-Medium.ttf";
import Bold from "./assets/fonts/Roboto-Bold.ttf";
import { device } from "./css/deviceSize";

export const GlobalStyle = createGlobalStyle`
// VAR

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

  *{
    box-sizing: border-box;
  }

    body {
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

   button {
    padding-left: 30px;
    padding-right: 30px;
    color: var(--primary-white);
    background-color: var(--primary-blue);
   }
    
 
// CONTAINER

.container {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto; 
 
  
  @media ${device.mobile} {
        min-width: 280px;
        max-width: 300px;
        }
  
  @media ${device.tablet} {
        min-width: 704px;
        max-width: 1216px;
        }

    @media ${device.laptop} {
        max-width: 1216px;
        padding-left: 24px;
        padding-right: 24px;
    }
}

`;
