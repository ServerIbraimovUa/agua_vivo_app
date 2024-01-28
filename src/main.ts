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

// SHADOW
--btn-box-shadow: 0 4px 14px #407bff;
 
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

  html{
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" height="72px" width="72px" stroke="black" fill="transparent" stroke-width="3"><g><path d="M10.756 29.167l-2.897-10.82M7.859 18.347l-5.355 4.747 1.214-20.203 11.151 16.89-7.010-1.434z"/></g></svg>')
      24 24,
      pointer;
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

  .btn {
  color: var(--primary-white);
  background-color: var(--primary-blue);
  cursor: inherit;
  @media ${device.tablet}{
    &:hover,
    &:focus {
      box-shadow:var(--btn-box-shadow);
    }}
    &:active{
      cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" height="72px" width="72px" stroke="black" fill="transparent" stroke-width="3"><g><path d="M20.056 28.896l-1.811-6.763M18.245 22.133l-3.347 2.967 0.759-12.627 6.969 10.556-4.381-0.896zM8.221 21.777c-1.279-1.279-2.223-2.854-2.748-4.585s-0.615-3.565-0.262-5.339c0.353-1.774 1.138-3.434 2.286-4.832s2.622-2.492 4.294-3.184c1.671-0.692 3.487-0.962 5.288-0.784s3.529 0.796 5.033 1.801c1.504 1.005 2.737 2.366 3.59 3.961s1.299 3.376 1.299 5.185M11.051 18.949c-0.814-0.814-1.415-1.816-1.749-2.918s-0.392-2.269-0.167-3.398c0.225-1.129 0.724-2.185 1.454-3.075s1.669-1.586 2.732-2.027c1.064-0.441 2.219-0.612 3.365-0.499s2.246 0.507 3.203 1.146c0.957 0.64 1.742 1.505 2.284 2.521s0.826 2.149 0.826 3.3"/></g></svg>')
      24 24,
      pointer;
    }
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
