import{u as i,j as e,I as s,d as a,w as t}from"./index-EevdrX7b.js";const c=i.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  li {
    padding-left: 16px;
    display: flex;
    position: relative;
    &::before {
      left: 0;
      content: "";
      bottom: 43%;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #407bff;
    }
  }
`,l=i.div`
  padding: 24px 16px;
  background-color: #ecf2ff;
  border-radius: 10px;
  /* background: var(--Secondary-color-2, #ecf2ff); */
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  h3 {
    margin-bottom: 12px;
  }
`;i.section`
  background-image: url(src/img/Background_Main_Page.svg);
  position: fixed;
  bottom: 0;
`;const o=()=>e.jsxs(l,{children:[e.jsx("h3",{children:"Why Drink Water"}),e.jsxs(c,{children:[e.jsx("li",{children:e.jsx("p",{children:"Supply of nutrients to all organs"})}),e.jsx("li",{children:e.jsx("p",{children:"Providing oxygen to the lungs"})}),e.jsx("li",{children:e.jsx("p",{children:"Maintaining the work of the heart"})}),e.jsx("li",{children:e.jsx("p",{children:"Release of processed substances"})}),e.jsx("li",{children:e.jsx("p",{children:"Ensuring the stability of the internal environment"})}),e.jsx("li",{children:e.jsx("p",{children:"Maintaining within the normal temperature"})}),e.jsx("li",{children:e.jsx("p",{children:"Maintaining an immune system capable of resisting disease"})})]})]}),d=i.div`
  h1 {
    margin-bottom: 16px;
  }
  h3 {
    margin-bottom: 12px;
  }
  div {
    /* display: flex;
    flex-direction: column;
    gap: 12px; */
    padding-bottom: 24px;
    padding-top: 24px;
  }
`,x=i.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .welcome-icon {
    height: 40px;
    width: 40px;
  }
`,p=({handleClick:n})=>e.jsxs(d,{children:[e.jsx("h1",{className:"title",children:"Water consumption tracker"}),e.jsx("h2",{children:"Record daily water intake and track"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Tracker Benefits"}),e.jsxs(x,{children:[e.jsxs("li",{children:[e.jsx(s,{className:"welcome-icon",id:"calendar"}),e.jsx("p",{children:"Habit drive"})]}),e.jsxs("li",{children:[e.jsx(s,{className:"welcome-icon",id:"bar"}),e.jsx("p",{children:"View statistics"})]}),e.jsxs("li",{children:[e.jsx(s,{className:"welcome-icon",id:"tools"}),e.jsx("p",{children:"Personal rate setting"})]})]})]}),e.jsx("button",{className:"btn",onClick:n,type:"button",children:"Try tracker"})]}),h=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-image: url(src/assets/images/Back_Main_Mob1.png);
  background-size: cover;
  @media ${a.tablet} {
    background-image: url(src/assets/images/Back_Main_Tab1.png);
  }
  @media ${a.desktop} {
    flex-direction: row;
    justify-content: center;
    background-image: url(src/assets/images/Back_Main_Desc2.png),
      url(src/assets/images/Back_Main_Desc1.png);
  }
`,m=()=>{const n=t(),r=()=>n("/signup");return e.jsx("section",{children:e.jsxs(h,{className:"container",children:[e.jsx(p,{handleClick:r}),e.jsx(o,{})]})})};export{m as default};
