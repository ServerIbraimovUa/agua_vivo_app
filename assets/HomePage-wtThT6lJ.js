import{j as e,r}from"./index-lN33veUx.js";import{u as o}from"./styled-components.browser.esm-ARofJkw0.js";const s=o.div`
  font-family: "Roboto";
  background: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;

  .modal {
    min-width: 592px;
    max-width: 1008px;
    min-height: 208px;
    max-height: 592px;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    padding: 32px 24px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #2f2f2f;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 24px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;

      transition: transform 350ms ease-in-out;

      &:hover {
        transform: rotate(90deg);
      }
    }
  }
`,d=({setVisible:n,title:t,children:i})=>e.jsx(s,{children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"header",children:[e.jsx("p",{children:t}),e.jsx("button",{onClick:()=>n(!1),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})})]}),i]})}),c=()=>{const[n,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"HomePage"}),n&&e.jsx(d,{setVisible:t,title:"Sign up",children:e.jsx("div",{children:"content"})}),e.jsx("div",{children:e.jsx("button",{onClick:()=>t(!0),children:"Open"})})]})};export{c as default};
