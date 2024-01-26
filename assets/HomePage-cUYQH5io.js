import{j as e,r as i}from"./index-CFJ2GKWA.js";import{u as d}from"./styled-components.browser.esm-eqxPcJFf.js";const c=d.div`
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
`,r=({setVisible:t,title:n,children:s})=>e.jsx(c,{children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"header",children:[e.jsx("p",{children:n}),e.jsx("button",{onClick:()=>t(!1),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M6 18L18 6M6 6L18 18",stroke:"#407BFF","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})})]}),s]})}),l=()=>{const[t,n]=i.useState({count:0}),s=()=>{t.count-50>=0&&n({count:t.count-50})},o=()=>{t.count+50<=5e3&&n({count:t.count+50})};return e.jsx("div",{children:e.jsxs("form",{children:[e.jsx("h2",{children:"Choose a value:"}),e.jsx("p",{children:"Amount of water:"}),e.jsxs("div",{className:"counter",children:[e.jsx("button",{onClick:s,type:"button",children:"-"}),e.jsxs("span",{children:[t.count,"ml"]}),e.jsx("button",{onClick:o,type:"button",children:"+"})]}),e.jsxs("label",{children:[e.jsx("p",{children:"Recording time:"}),e.jsx("input",{type:"time"})]}),e.jsxs("label",{children:[e.jsx("h2",{children:"Enter the value of the water used:"}),e.jsx("input",{type:"text"})]}),e.jsxs("div",{children:[e.jsxs("span",{children:[t.count,"ml"]}),e.jsx("button",{type:"submit",children:"Save"})]})]})})},a=()=>{const[t,n]=i.useState(!1);return e.jsxs("div",{children:[e.jsx("h1",{children:"Today"}),e.jsx("p",{children:"No notes yet"}),t&&e.jsx(r,{setVisible:n,title:"Add water",children:e.jsx(l,{})}),e.jsx("div",{children:e.jsx("button",{onClick:()=>n(!0),children:"Add water"})}),"t"]})},u=()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"HomePage"}),e.jsx(a,{}),t&&e.jsx(r,{setVisible:n,title:"Sign up",children:e.jsx("div",{children:"content"})}),e.jsx("div",{children:e.jsx("button",{onClick:()=>n(!0),children:"Open"})})]})};export{u as default};
