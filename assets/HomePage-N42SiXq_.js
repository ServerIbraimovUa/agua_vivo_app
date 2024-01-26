import{j as e,r as o}from"./index-efbhVb_M.js";import{u}from"./styled-components.browser.esm-iLOQYCdS.js";const p=u.div`
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
      .modal-icon {
        width: 24px;
        height: 24px;
        stroke: #407bff;
      }
    }
  }
`,j="/agua_vivo_app/assets/sprite--zZjbjsd.svg",m=({className:i,id:t})=>e.jsx("svg",{className:i,children:e.jsx("use",{href:`${j}#icon-${t}`})}),f=({setVisible:i,title:t,children:n})=>e.jsx(p,{children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"header",children:[e.jsx("p",{children:t}),e.jsx("button",{onClick:()=>i(!1),children:e.jsx(m,{className:"modal-icon",id:"close"})})]}),n]})}),g=({title:i,show:t})=>{const[n,l]=o.useState({count:0,inputValue:"0"}),r=s=>{n.count+s>=0&&l({inputValue:String(s),count:s})},a=s=>{const{value:h}=s.target;l(x=>({...x,inputValue:h}))},d=()=>{r(+n.inputValue)},c=s=>{s.key==="-"&&s.preventDefault()};return e.jsxs("div",{children:[t&&e.jsxs("div",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]}),e.jsx("h2",{children:i}),e.jsx("p",{children:"Amount of water:"}),e.jsxs("form",{children:[e.jsxs("div",{className:"counter",children:[e.jsx("button",{onClick:()=>r(n.count-50),type:"button",children:"-"}),e.jsxs("span",{children:[n.count,"ml"]}),e.jsx("button",{onClick:()=>r(n.count+50),type:"button",children:"+"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Recording time:"}),e.jsx("input",{type:"time"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Enter the value of water used:"}),e.jsx("input",{type:"number",min:0,max:5e3,step:50,value:n.inputValue,onChange:a,onBlur:d,onKeyPress:c})]}),e.jsxs("div",{children:[e.jsxs("span",{children:[n.count,"ml"]}),e.jsx("button",{type:"submit",children:"Save"})]})]})]})},b=()=>{const[i,t]=o.useState(!1);return e.jsxs("div",{children:[e.jsx("h1",{children:"Today"}),e.jsx("p",{children:"No notes yet"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]}),e.jsxs("li",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]}),e.jsxs("li",{children:[e.jsx("p",{children:"250 ml"}),e.jsx("p",{children:"7:00 am"})]})]}),e.jsx("div",{children:e.jsx("button",{onClick:()=>t(!0),children:"Add water"})}),i&&e.jsx(f,{setVisible:t,title:"Add water",children:e.jsx(g,{title:"Choose a value",show:!1})})]})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"HomePage"}),e.jsx(b,{})]});export{w as default};
