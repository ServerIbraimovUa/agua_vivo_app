import { createGlobalStyle } from "styled-components";
import Regular from "./assets/fonts/Roboto-Regular.ttf";
import Medium from "./assets/fonts/Roboto-Medium.ttf";
import Bold from "./assets/fonts/Roboto-Bold.ttf";

// нормолайз тоже сюда надо если не получится скажешь
export const GlobalStyle = createGlobalStyle`

:root{
  --white:#FFF;
  --black: #2F2F2F;
}
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

    *{
      box-sizing: border-box;
    }




    body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin: 0;

}

/* Контейнер пока примерно расчитал если что исправь */

.container {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto; 
  
  @media screen and (min-width: 320px) {
        max-width: 280px;
        }
  
  @media screen and (min-width: 768px) {
        max-width: 704px;
        }

    @media screen and (min-width: 1440px) {
        max-width: 1216px;
        padding-left: 24px;
        padding-right: 24px;
    }
}

`;
