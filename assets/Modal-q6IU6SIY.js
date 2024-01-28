import{b as i,j as e,r as d}from"./index-acTLmcJ5.js";const c=i.div`
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

    /* max-height: 592px; */
    background: var( --secondary-white);

   

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
    font-weight: 600;
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
`,l="/agua_vivo_app/assets/sprite--zZjbjsd.svg",p=({className:n,id:o})=>e.jsx("svg",{className:n,children:e.jsx("use",{href:`${l}#icon-${o}`})}),f=({setVisible:n,title:o,children:r})=>{d.useEffect(()=>{const t=a=>{a.code==="Escape"&&n(!1)};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[n]);const s=t=>{t.currentTarget===t.target&&n(!1)};return e.jsx(c,{onClick:s,children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"header",children:[e.jsx("p",{children:o}),e.jsx("button",{onClick:()=>n(!1),children:e.jsx(p,{className:"modal-icon",id:"close"})})]}),r]})})};export{p as I,f as M};
