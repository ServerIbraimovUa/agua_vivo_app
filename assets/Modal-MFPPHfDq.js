import{u as s,j as e}from"./index-H2oq1Ih4.js";const o=s.div`
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
    background: var(--primary-white);
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
`,r="/agua_vivo_app/assets/sprite--zZjbjsd.svg",a=({className:t,id:n})=>e.jsx("svg",{className:t,children:e.jsx("use",{href:`${r}#icon-${n}`})}),c=({setVisible:t,title:n,children:i})=>e.jsx(o,{children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"header",children:[e.jsx("p",{children:n}),e.jsx("button",{onClick:()=>t(!1),children:e.jsx(a,{className:"modal-icon",id:"close"})})]}),i]})});export{c as M};
